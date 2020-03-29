import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import { getGroups , updateScore } from '../../actions/groupActions';
import { addVote } from '../../actions/voteActions';
import { connect } from 'react-redux';
import classnames from 'classnames';
class Form extends Component {
    constructor() {
        super();
        this.state = {
            voterNumber: "",
            groupID: "",
            groupName: "",
            studentNumber:"",
            studentName:"",
            score: "",
            initialScore:9,
            comment:"",
            errors:{},
            scoreError:""
            
            
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        this.props.getGroups();
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          score: changeEvent.target.value
        });
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    

    onSubmit(e){
        e.preventDefault();

        const voteData = {
            voterNumber: this.state.voterNumber,
            studentNumber: this.state.studentNumber,
            score: this.state.score,
            
            comment: this.state.comment

        }
        var scoreInt
        if (this.state.initialScore === 0) {
            scoreInt = parseInt(this.state.score) + this.state.initialScore
        }
        else{
            scoreInt = (parseInt(this.state.score) + this.state.initialScore)/2

        }

        const updateData = {
            groupName: this.state.groupName,
            students: [
                {
                    studentScore: scoreInt,
                    studentName: "Minh",
                    studentNumber: this.state.studentNumber
                }
            ]
        }
        console.log(updateData)
        this.props.updateScore(updateData)
        this.props.addVote(voteData)
       
        
        

    }

    // selectGroup(groups){
    //     return(
    //         <div className="mt-5">
    //             <label for="exampleFormControlSelect1">Select a group:</label>
    //             <select className="form-control" id="exampleFormControlSelect1" name="groupName"
    //                 value={this.state.groupName}
    //                 placeholder="Select a group"
    //                 onChange={this.onChange}>
    //                 <option selected disabled>Group Name</option>
    //                 {groups.map(group => (
    //                     <option key={group.id}>
    //                         {group.groupName}
    //                     </option>

    //                 ))}
    //             </select>

    //         </div>
    //     )
    // }



    render() {


        const { defaultGroupName , groups } = this.props.groups;
        const {errors} = this.state

        const selectGroup = (
            <div className="mt-5">
                <label htmlFor="exampleFormControlSelect1">Select a group:</label>
                <select className="form-control" id="exampleFormControlSelect1" name="groupName"
                    value={this.state.groupName}
                    placeholder="Select a group"
                    onChange={this.onChange}

                    >
                    {/* <option selected disabled >Group Name</option> */}
                    {groups.map(group => (
                        <option key={group._id}>
                            {group.groupName}
                        </option>

                    ))}
                </select>
                
            </div>
        )

        const selectStudent = (name) => {
            return (
            <div className="mt-5">
                <label htmlFor="exampleFormControlSelect2">Select a student:</label>
                {groups.filter(group => group.groupName === name).map((filterGroup, index) => (
                    <select key={index} className={classnames("form-control",{
                        "is-invalid":errors.studentNumber
                    })} id="exampleFormControlSelect2"  
                    name="studentNumber"   
                    onChange={this.onChange}
                    defaultValue=""
                    >


                        <option value="" disabled>Please choose a student....</option>
                        {filterGroup.students.map(student => (

                            <option key={student.studentNumber}
                            value = {student.studentNumber}

                            >{student.studentName} ({student.studentNumber})</option>
                        ))}


                    </select>
                    
                ))}
                {errors && (
                    <div className="invalid-feedback">
                        {errors.studentNumber}
                    </div>
                )}

            </div>
            )
        };

        const formGroup = () => {
            return (
                <>
                {selectGroup}
                {
                    (this.state.groupName === "") ? selectStudent(defaultGroupName) : selectStudent(this.state.groupName)
                }
                </>

            )
        }
        return (
            <div className="wrapper">

                <section className="form-section">
                    <form className="text-center  p-5" onSubmit={this.onSubmit}>
                        <h1>Network Programming - Bonus Task 2 </h1>
                        <div className="form-group mb-">
                            <div className="mt-3">
                                <label >Your student number:</label>
                                <input type="text" 
                                className={classnames("form-control",{
                                    "is-invalid":errors.voterNumber
                                })}
                                id="exampleInputEmail1"
                                placeholder="Enter your student number" 
                                name="voterNumber" 
                                value={this.state.voterNumber}
                                onChange={this.onChange}
                                />
                                {errors.voterNumber && (
                                    <div className="invalid-feedback">
                                        {errors.voterNumber}
                                    </div>
                                )}
                            </div>

                            <div className="mt-3">
                            {(Object.entries(groups).length === 0)
                                ? (<div className="spinner-border" style={{width: '7rem', height: '7rem'}} role="status" aria-hidden="true"/>)
                                : formGroup()
                            }
                            </div>

                            



                        </div>
                       
                        <div className="mt-5">
                            <label>Select a score you want to give to their presentation:</label>
                          
                            <br />
                            <div className="form-check form-check-inline mr-4">
                                <input className="form-check-input" type="radio" name="score" value="1" id="inlineRadio1" checked={this.state.score === "1"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                            </div>
                            <div className="form-check form-check-inline mr-4">
                                <input className="form-check-input" type="radio" name="score"  value="2" id="inlineRadio2" checked={this.state.score === "2"} onChange={this.handleOptionChange}/>
                                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="3" id="inlineRadio3" checked={this.state.score === "3"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="4" id="inlineRadio4" checked={this.state.score === "4"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="5" id="inlineRadio5" checked={this.state.score === "5"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="6" id="inlineRadio6" checked={this.state.score === "6"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio6">6</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="7" id="inlineRadio7" checked={this.state.score === "7"}  onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio7">7</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="8" id="inlineRadio8" checked={this.state.score === "8"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio8">8</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="score" value="9" id="inlineRadio9" checked={this.state.score === "9"} onChange={this.handleOptionChange}  />
                                <label className="form-check-label" htmlFor="inlineRadio9">9</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio"  value="10" id="inlineRadio10" checked={this.state.score === "10"} onChange={this.handleOptionChange} />
                                <label className="form-check-label" htmlFor="inlineRadio10">10</label>
                            </div>
                            {errors.score && (
                                    <div className="invalid-score">
                                        {errors.score}
                                    </div>
                                )}
                           
                        </div>
                       


                        <label className="mt-5">Comments (optional)</label>

                        <div className="input-group">

                            <textarea className="form-control" name="comment" value={this.state.comment} onChange={this.onChange} />
                        </div>

                        <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>


                    </form>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups,
    errors: state.errors
})

export default connect(mapStateToProps, { getGroups, addVote, updateScore })(Form);
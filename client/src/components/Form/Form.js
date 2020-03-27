import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import { getGroups } from '../../actions/groupActions';
import { connect } from 'react-redux';
class Form extends Component {
    constructor() {
        super();
        this.state = {
            voterNumber: "",
            groupID: "",
            groupName: "",
            
        };
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        this.props.getGroups();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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



        const { groups } = this.props.groups;


        const selectGroup = (
            <div className="mt-5">
                <label for="exampleFormControlSelect1">Select a group:</label>
                <select className="form-control" id="exampleFormControlSelect1" name="groupName"
                    value={this.state.groupName}
                    placeholder="Select a group"
                    onChange={this.onChange}>
                    <option selected disabled>Group Name</option>
                    {groups.map(group => (
                        <option key={group.id}>
                            {group.groupName}
                        </option>

                    ))}
                </select>

            </div>
        )

        const selectStudent = (
            <div className="mt-5">
                <label for="exampleFormControlSelect2">Select a student:</label>
                {groups.filter(group => group.groupName === this.state.groupName).map(filterGroup => (
                    <select className="form-control" id="exampleFormControlSelect2" >


                        <option selected disabled>Student name</option>
                        {filterGroup.students.map(student => (

                            <option>{student.studentName} ({student.studentNumber})</option>
                        ))}


                    </select>
                ))}

            </div>
        );
        return (
            <div className="wrapper">

                <section className="form-section">
                    <form className="text-center  p-5">
                        <h1>Network Programming - Bonus Task 2 </h1>
                        <div className="form-group">
                            <div className="mt-3">
                                <label htmlFor="studentNumber">Your student number:</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your student number" />
                            </div>


                            {Object.entries(groups).length !==0 ? selectGroup : ""}

                            {this.state.groupName !== "" ? selectStudent : ""}




                        </div>
                        <div className="mt-5">
                            <label>Select a score you want to give to their presentation:</label>
                            <br />
                            <div className="form-check form-check-inline mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                            </div>
                            <div className="form-check form-check-inline mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" defaultValue="option4" />
                                <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" defaultValue="option5" />
                                <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" defaultValue="option6" />
                                <label className="form-check-label" htmlFor="inlineRadio6">6</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" defaultValue="option7" />
                                <label className="form-check-label" htmlFor="inlineRadio7">7</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" defaultValue="option8" />
                                <label className="form-check-label" htmlFor="inlineRadio8">8</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" defaultValue="option9" />
                                <label className="form-check-label" htmlFor="inlineRadio9">9</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" defaultValue="option10" />
                                <label className="form-check-label" htmlFor="inlineRadio10">10</label>
                            </div>
                        </div>


                        <label className="mt-5">Comments (optional)</label>

                        <div className="input-group">

                            <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                        </div>

                        <Link to="/admin"><button className="btn btn-info btn-block my-4" type="submit">Sign in</button></Link>


                    </form>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups
})

export default connect(mapStateToProps, { getGroups })(Form);
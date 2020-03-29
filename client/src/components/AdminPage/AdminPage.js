import React, { Component } from 'react'
import { connect } from "react-redux"
import { getGroups, deleteGroup, addGroup } from "../../actions/groupActions"
import { getVotes } from "../../actions/voteActions"
import classnames from 'classnames'
import { Redirect } from "react-router-dom";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isIndividual: "1",
            groupName: '',
            studentName: '',
            studentName2: '',
            studentNumber: '',
            studentNumber2: '',
            errors: {},


        }
    }
    clearState() {
        this.setState({
            isIndividual: "1",
            groupName: '',
            studentName: '',
            studentName2: '',
            studentNumber: '',
            studentNumber2: ''
        })
    }


    onDelete(id) {
        if (window.confirm('Do want to delete this group ?')) {
            this.props.deleteGroup(id);
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        this.props.getGroups();
        this.props.getVotes();
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.isIndividual === '1') {
            const newGroup = {
                groupName: this.state.groupName,
                students: [
                    {
                        studentName: this.state.studentName,
                        studentNumber: this.state.studentNumber
                    }
                ]
            }
            this.props.addGroup(newGroup);

        } else {
            const newGroup = {
                groupName: this.state.groupName,
                students: [
                    {
                        studentName: this.state.studentName,
                        studentNumber: this.state.studentNumber
                    },
                    {
                        studentName: this.state.studentName2,
                        studentNumber: this.state.studentNumber2
                    }
                ]
            }
            this.props.addGroup(newGroup);

        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            isIndividual: e.target.value
        })
    }


    render() {
        if (!window.localStorage.getItem('adminData')) {
            return <Redirect to="/login" />
        }
        var { groups } = this.props.groups;
        var { votes } = this.props.votes
        const { errors } = this.state;
        

        //render groups
        var renderGroups = groups.map((group, index) => {
            if (group.students.length === 1) {
                //get total vote
                var totalStudentVote = 0;
                for (let index = 0; index < group.students.length; index++) {
                    votes.forEach(vote => {
                        if(vote.studentNumber === group.students[index].studentNumber){
                            totalStudentVote += 1;
                        }
                    });
                }
                return <div key={index} className="py-5">
                    {/* per group */}
                    <h1>{group.groupName}</h1>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Number</th>
                                <th scope="col">Score</th>
                                <th scope="col">Total Vote</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{group.students[0].studentName}</td>
                                <td>{group.students[0].studentNumber}</td>
                                <td>{group.students[0].studentScore}</td>
                                <td>{totalStudentVote}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={() => this.onDelete(group._id)}
                        className="btn btn-danger"
                    >Delete</button>
                </div>
            } else {
                //get total vote
                var totalStudentVote = [0,0];

                for (let index = 0; index < group.students.length; index++) {
                    votes.forEach(vote => {
                        if(vote.studentNumber === group.students[index].studentNumber){
                            totalStudentVote[index] += 1;
                        }
                    });
                    // if(index = 0){
                    //     votes.forEach(vote => {
                    //         if(vote.studentNumber === group.students[index]){
                    //             totolStudent1Vote += 1;
                    //         }
                    //     });
                    // }else{
                    //     votes.forEach(vote => {
                    //         if(vote.studentNumber === group.students[index]){
                    //             totolStudent2Vote += 1;
                    //         }
                    //     });
                    // }
                }
                return <div className="py-5">
                    {/* per group */}
                    <h1>{group.groupName}</h1>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Number</th>
                                <th scope="col">Score</th>
                                <th scope="col">Total Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{group.students[0].studentName}</td>
                                <td>{group.students[0].studentNumber}</td>
                                <td>{group.students[0].studentScore}</td>
                                <td>{totalStudentVote[0]}</td>
                            </tr>
                            <tr>
                                <td>{group.students[1].studentName}</td>
                                <td>{group.students[1].studentNumber}</td>
                                <td>{group.students[1].studentScore}</td>
                                <td>{totalStudentVote[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={() => this.onDelete(group._id)}
                        className="btn btn-danger">Delete</button>
                </div>
            }
        })
        return (
            <div>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create a Group</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* selection number student for a group */}
                                    <div>
                                        <label>
                                            Please choose number student for a group:
                        <select value={this.state.isIndividual} onChange={this.handleChange}>
                                                <option selected value="1">Individual</option>
                                                <option value="2">Group of Two</option>
                                            </select>
                                        </label>
                                    </div>
                                    {/* render form */}
                                    {this.state.isIndividual === "1"
                                        ? (<form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="groupName">Group Name</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.groupName
                                                    })}
                                                    id="groupName"
                                                    placeholder="Group Name"
                                                    name="groupName"
                                                    value={this.state.groupName}
                                                    onChange={this.onChange}
                                                />
                                                {errors.groupName && (
                                                    <div className="invalid-feedback">
                                                        {errors.groupName}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupName">Student Name</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.studentName
                                                    })}
                                                    id="studentName"
                                                    placeholder="Student Name"
                                                    name="studentName"
                                                    value={this.state.studentName}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentName && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentName}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupName">Student Number</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.studentNumber
                                                    })}
                                                    id="studentNumber"
                                                    placeholder="Student Number"
                                                    name="studentNumber"
                                                    value={this.state.studentNumber}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentNumber && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentNumber}
                                                    </div>
                                                )}
                                            </div>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary mx-2">Create</button>
                                        </form>)
                                        // Group Add
                                        : (<form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="groupName">Group Name</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.groupName
                                                    })}
                                                    id="groupName"
                                                    placeholder="Group Name"
                                                    name="groupName"
                                                    value={this.state.groupName}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentNumber && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentNumber}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupName">First Student Name</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.studentName
                                                    })} id="studentName"
                                                    placeholder="Student Name"
                                                    name="studentName"
                                                    value={this.state.studentName}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentName && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentName}
                                                    </div>
                                                )}

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupName">First Student Number</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.studentNumber
                                                    })} id="studentNumber"
                                                    placeholder="Student Number"
                                                    name="studentNumber"
                                                    value={this.state.studentNumber}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentNumber && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentNumber}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupName">Second Student Name</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.studentName2
                                                    })} id="studentName2"
                                                    placeholder="Student Name 2"
                                                    name="studentName2"
                                                    value={this.state.studentName2}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentName && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentName2}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupName">Second Student Number</label>
                                                <input
                                                    type="text"
                                                    className={classnames("form-control", {
                                                        "is-invalid": errors.studentNumber2
                                                    })} id="studentNumber2"
                                                    placeholder="Student Number2"
                                                    name="studentNumber2"
                                                    value={this.state.studentNumber2}
                                                    onChange={this.onChange}
                                                />
                                                {errors.studentNumber2 && (
                                                    <div className="invalid-feedback">
                                                        {errors.studentNumber2}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary mx-2">Create</button>
                                            </div>
                                        </form>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div className="pt-5"><button className="btn btn-success" data-toggle="modal" data-target="#exampleModal">Create a Group</button></div>
                    {renderGroups}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups,
        errors: state.errors,
        votes: state.votes
    }
}

export default connect(mapStateToProps, { getGroups, deleteGroup, addGroup, getVotes })(AdminPage);
import React, { Component } from 'react'
import { connect } from "react-redux"
import { getGroups, deleteGroup } from "../../actions/groupActions"

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onDelete(id) {
        if (window.confirm('Do want to delete this group ?')) {
            this.props.deleteGroup(id);
        }
    }

    componentDidMount() {
        this.props.getGroups();
    }
    render() {
        var { groups } = this.props.groups;
        var renderGroups = groups.map((group, index) => {
            if (group.students.length === 1) {
                return <div key={index} className="py-5">
                    {/* per group */}
                    <h1>{group.groupName}</h1>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Number</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{group.students[0].studentName}</td>
                                <td>{group.students[0].studentNumber}</td>
                                <td>{group.students[0].studentScore}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={() => this.onDelete(group._id)}
                        className="btn btn-danger"
                    >Delete</button>
                </div>
            } else {
                return <div className="py-5">
                    {/* per group */}
                    <h1>Group1</h1>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Number</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{group.students[0].studentName}</td>
                                <td>{group.students[0].studentNumber}</td>
                                <td>{group.students[0].studentScore}</td>
                            </tr>
                            <tr>
                                <td>{group.students[1].studentName}</td>
                                <td>{group.students[1].studentNumber}</td>
                                <td>{group.students[1].studentScore}</td>
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
                <div class="container">
                    <div className="pt-5"><button className="btn btn-success">Create a Group</button></div>
                    {renderGroups}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps, { getGroups, deleteGroup })(AdminPage);
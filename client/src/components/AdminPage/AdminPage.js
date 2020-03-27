import React, { Component } from 'react'

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
}
    render() {
        return (
            <div>
                <div class="container">
                    <div className="pt-5"><button className="btn btn-success">Create a Group</button></div>
                    <div className="py-5">
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
                                    <td>Vo Tran Nhut Khanh</td>
                                    <td>s3694787</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Huynh Cong Minh</td>
                                    <td>s3678460</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                    <div className="py-5">
                        {/* per group */}
                        <h1>Group2</h1>
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
                                    <td>Yi Fang</td>
                                    <td>s1234567</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>CoCo</td>
                                    <td>s7654321</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

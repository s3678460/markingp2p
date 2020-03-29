import React, { Component } from 'react'
import './Admin.css'
import logo from '../../library/admin-logo.png'
import {setUserStatus} from "../../actions/userStatusActions";
import { connect } from "react-redux";
class Admin extends Component {
    constructor() {
        super();
        this.state = {
            userID: '',
            userPassword: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const userData = {
            userID: this.state.userID,
            userPassword: this.state.userPassword
        }

        if (userData.userID === "admin" && userData.userPassword === "admin") {
            //set local storage
            window.localStorage.setItem("adminData", JSON.stringify(userData))
            window.alert("Login successful!!!")
            this.props.setUserStatus(true);
            history.push('/admin')
        }else if(userData.userID === "" || userData.userPassword === ""){
            window.alert("Username or password can not be blank!!!!!!!")
        } else {
            window.alert("Username or password is wrong!!!!")
        }
    }
    render() {
        return (
            <div className="wrapper">
                <section className="admin-form-section">
                    <form className="text-center p-5" onSubmit={this.onSubmit}>
                        <p>
                            <img src={logo} width={50} height={50} alt="admin" />
                        </p>
                        <p className="h4 mb-4">Sign in</p>
                        {/* User ID */}
                        <input
                            onChange={this.onChange}
                            type="text"
                            name="userID"
                            value={this.state.userID}
                            id="defaultLoginFormEmail"
                            className="form-control mb-4"
                            placeholder="User ID" />
                        {/* Password */}
                        <input
                            onChange={this.onChange}
                            type="password"
                            name="userPassword"
                            value={this.state.userPassword}
                            id="defaultLoginFormPassword"
                            className="form-control mb-4"
                            placeholder="Password" />

                        {/* Sign in button */}
                        <button className="btn btn-info btn-block my-4" type="submit">Login</button>
                        {/* Register */}
                    </form>
                </section>
            </div>
        )
    }
}

export default connect(null,{setUserStatus})(Admin);

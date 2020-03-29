import React, { Component } from 'react'
import logo from '../../library/google-form.svg'
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { removeUserStatus } from "../../actions/userStatusActions";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserStatus: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isUserStatus: nextProps.userStatus.isUserStatus
        })
    }

    componentDidMount() {
        this.setState({
            isUserStatus: this.props.userStatus.isUserStatus
        })
    }

    logOut = () => {
        if (window.confirm("Do want to logout ?")) {
            this.props.removeUserStatus(false);
            window.location.reload();
        }
    }
    render() {

        if (this.state.isUserStatus) {
            var adminData = JSON.parse(window.localStorage.getItem('adminData'));
            return (
                <nav className="navbar navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} width={30} height={30} className="d-inline-block align-top mr-2" alt="" />
                        Marking Form
                </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {adminData.userID} <i className="fa fa-user" aria-hidden="true" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin" className="dropdown-item">Group Manager</Link>
                                <div className="dropdown-divider" />
                                <a onClick={this.logOut} className="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} width={30} height={30} className="d-inline-block align-top mr-2" alt="" />
                        Marking Form
                </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/login" className="nav-live active">
                                Admin Login
                        </Link>
                        </li>
                    </ul>
                </nav>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userStatus: state.userStatus
    }
}

export default connect(mapStateToProps, { removeUserStatus })(NavBar);
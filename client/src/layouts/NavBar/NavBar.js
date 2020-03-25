import React, { Component } from 'react'
import logo from '../../library/google-form.svg'
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
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

export default NavBar;
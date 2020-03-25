import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
import logo from '../../library/admin-logo.png'
class Admin extends Component {
    render() {
        return (
            <div className="wrapper">
                <section className="admin-form-section">
                <form className="text-center  p-5" action="#!">
                    <p>
                        <img src={logo} width={50} height={50}/>
                    </p>
                    <p className="h4 mb-4">Sign in</p>
                    {/* Email */}
                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                    {/* Password */}
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                    
                    {/* Sign in button */}
                    <Link to="/admin"><button className="btn btn-info btn-block my-4" type="submit">Sign in</button></Link>
                    {/* Register */}
                    
                </form>
                </section>
            </div>
        )
    }
}

export default Admin;

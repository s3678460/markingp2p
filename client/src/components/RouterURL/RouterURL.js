import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Admin from '../Admin/Admin'
import Form from '../Form/Form'
import AdminPage from '../AdminPage/AdminPage'
 class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Form}/>
                    <Route path="/login" component={Admin}/>
                    <Route path="/admin" component={AdminPage}/>
                    <Route component={Form}/>
                </Switch>
            </div>
        )
    }
}

export default RouterURL;

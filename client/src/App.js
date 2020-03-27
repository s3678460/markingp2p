import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom';
import NavBar from './layouts/NavBar/NavBar'
import RouterURL from './components/RouterURL/RouterURL'
import './App.css'
class App extends Component {
  render() {
    return (

      
        <Router>
          <NavBar />
          <div className="container-fluid">
            <RouterURL />
          </div>
        </Router>
      


    )
  }
}

export default App;
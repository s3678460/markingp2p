import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom';
import NavBar from './layouts/NavBar/NavBar'
import RouterURL from './components/RouterURL/RouterURL'
import './App.css'
class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <NavBar />
          <body className="container-fluid">
            <RouterURL />
          </body>
        </Router>
      </div>


    )
  }
}

export default App;
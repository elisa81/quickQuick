import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from '../Contact'
import Service from '../Service'
import NavBar from '../NavBar'
import Home from '../Home'
import About from '../About'
import Login from '../Login'
import Rider from '../Rider'
import Footer from '../Footer'
import Tracking from "../Tracking";

import axios from 'axios'
import './App.css'

class App extends Component {
constructor() {
  super()
    // this.state = {
    //   clients : []
    // }
}

  componentWillMount() {
    axios.get('http://localhost:8000/clients')
      .then((response) => {
        console.log(response)
        this.setState({ clients: response.data })
      })
      .catch(function (error) {
      })
  }


  render() {
    return (
    <div>
        {/* <Route exact path="/" render={() => (loggedIn ? < to="/service" /> : <PublicHomePage />)} /> */}
      <header className="App-header" id="navBarFont">
        <NavBar />
      </header>
      <div className="navbar-container">
        <div className="pageContainer">
        <Switch>
          <Route path="/rider" component={Rider} />
          {/* <Route path="/client" exact component={Client} /> */}
        </Switch>
          <Switch>
            <Route path="/login" component={Login} />
             <Route path="/" exact component={Home} />
             <Route path="/about" component={About} />
             <Route path="/service" component={Service} />
             <Route path="/contact" component={Contact} />
             <Route path="/tracking" component={Tracking} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      authenticate: null
    }
  }

  signUp = () => {
    axios.post('http://localhost:8000/signup', {
      username: this.loginForm.username.value,
      password: this.loginForm.password.value
    }).then((response) => {
      console.log(response.data)
    })
  }

  login = () => {
    axios.post('http://localhost:8000/login', {
      username: this.loginForm.username.value,
      password: this.loginForm.password.value
    }).then((response) => {
      console.log(response.data)
      this.setState({
        authenticated: response.data.authenticated
      })
    })
  }


  render() {
    return <div className="container" id="loginForm">
        {/* <form ref={(self) => { this.loginForm = self }}> */}

        {/* <input type="text" name="name" placeholder="name" /> */}

        <div className="form-group">
          <label className="control-label col-sm-4" name="name" />
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
        </div>
        <br />

        <div className="form-group">
          <label className="control-label col-sm-4" name="username" />
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
        </div>
        <br />

        <div className="form-group">
          <label className="control-label col-sm-4" name="password" />
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Password" />
          </div>
        </div>
      <br />
{/* 
        <br />
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <br /> */}
        <button className="button1" type="button" onClick={this.signUp}>
          SIGN UP
        </button>
        <button className="button1" type="button" onClick={this.login}>
          LOGIN CLIENT
        </button>
        <button className="button1" type="button" onClick={this.login}>
          LOGIN RIDER
        </button>

        {/* </form> */}

        {/* <div>
          {this.state.authenticated === null ? '' : this.state.authenticated ? 'Login success' : 'Login failed'}
        </div> */}
      </div>;
  }
}

export default Login
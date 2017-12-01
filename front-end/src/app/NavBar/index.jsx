import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'

class NavBar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">QuickQuick</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/tracking">Tracking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default NavBar

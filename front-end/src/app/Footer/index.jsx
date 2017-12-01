import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {

  render() {
    return (
        <div className="footer">
          <div className="container">
            <div className="row">
              <p className="col-sm-3 col-md-3" id="links">
                <Link to="/">Home</Link>
              </p>
              <p className="col-sm-3 col-md-3" id="links">
                <Link to="/about">About Us</Link>
              </p>
              <p className="col-sm-3 col-md-3" id="links">
                <Link to="/service">Services</Link>
              </p>
              <p className="col-sm-3 col-md-3" id="links">
                <Link to="/contact">Contact</Link>
              </p>
            </div>

            <div className="row">
              <p className="col-sm-3 cold-md-3">Vision</p>
              <p className="col-sm-3 col-md-3">About us</p>
              <p className="col-sm-3 col-md-3">Pick up form</p>
              <p className="col-sm-3 col-md-3">Directions</p>
            </div>

            <div className="row">
              <p className="col-sm-3 col-md-3">Mission</p>
              <p className="col-sm-3 col-md-3">Our team</p>
              <p className="col-sm-3 col-md-3"></p>
              <p className="col-sm-3 col-md-3">Map</p>
            </div>

            <div className="row">
              <p className="col-sm-3 col-md-3">How to use</p>
              <p className="col-sm-3 col-md-3"></p>
              <p className="col-sm-3 col-md-3"></p>
              <p className="col-sm-3 col-md-3"></p>
            </div>



        <div className="container" id="icons">
          <i className="promoIcon fa fa-facebook-official fa-3x" aria-hidden="true" id="iconPadding"></i>
          <i className="promoIcon fa fa-twitter-square fa-3x" aria-hidden="true" id="iconPadding"></i>
          <i className="promoIcon fa fa-linkedin-square fa-3x" aria-hidden="true" id="iconPadding"></i>
        </div>

        <div className="foot">
          <p>Copyright © 2017 All Rights Reserved</p>
          <Link to="/rider">Rider Portal</Link>
        </div>


          </div>
        </div>

    )
  }
}

export default Footer

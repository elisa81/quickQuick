import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="bikeIMG" />

        <div className="backgroundAlt">
          <div className="container">
            <h1 id="aboutHeader"> VISION </h1>
            <p className="homeStatements">
              Fast&Reliable across the city. QuickQuick's vision is to reform
              the courier service experience with focus on easy online access to
              riders for quick pick up and assurance of guaranteed delivery.
            </p>
          </div>
        </div>

        <div className="backgroundMain">
          <div className="container">
            <h1 id="aboutHeader"> MISSION </h1>
            <p className="homeStatements">
              Our mission is to connect our service to our clients as fast as
              possible, with the least steps, and with competitive pricing.
            </p>
          </div>
        </div>

        <div className="backgroundAlt">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 promoContainer">
                <i
                  className="promoIcon fa-4x  fa fa-file-text-o"
                  aria-hidden="true"
                />
                <h3>PICKUP FORM</h3>
                <p className="text-left homeStatements">
                  Fill out the simple pickup and drop off request on our
                  website. The rider will be notified of the request and will
                  send you a confirmation number.
                </p>
              </div>

              <div className="col-sm-4 col-md-4 promoContainer">
                <i className="promoIcon fa-4x fa fa-usd" aria-hidden="true" />
                <h3>PAYMENT</h3>
                <p className="text-left homeStatements">
                  Once you have filled out the request it will render a
                  competitive price for our service.
                </p>
              </div>

              <div className="col-sm-4 col-md-4 promoContainer">
                <i
                  className="promoIcon fa-4x fa fa-location-arrow"
                  aria-hidden="true"
                />
                <h3>TRACK</h3>
                <p className="text-left homeStatements">
                  Once the request goes through and the rider confirms the pick
                  up it will also gie you an estimated time of pickup and
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="backgroundMain">
          <div className="container" id="startButton">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-warning btn-cons btn-lg"
                id="startButtonBold"
              >
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

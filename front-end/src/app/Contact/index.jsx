import React from "react";
import MapContainer from "../MapContainer";

class Contact extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="backgroundAlt">
          <div className="container">
            <div className="mapHeight">
              <MapContainer />
            </div>
          </div>
        </div>

        <div className="backgroundMain">
          <div className="container">
            <h2>CONTACT INFORMATION</h2>
            <br />
            <p className="homeStatements">
              Head Office: 455 Granville Vancouver
            </p>
            <p className="homeStatements">E-mail quickquick@quick.com</p>
            <p className="homeStatements">Telephone: 1-800-555-5555</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

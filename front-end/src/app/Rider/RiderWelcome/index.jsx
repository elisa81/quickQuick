import React from "react";
import axios from "axios";

class RiderWelcome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getRiderInfo().then(this.displayRider);
  }

  getRiderInfo = () => {
    return axios.get("http://localhost:8000/riderInfo");
  };

  render() {
    console.log(this.props.riders);
    return (
    <div>

        <p id="riderWelcome">Welcome Rider</p>
        {/* {this.props.riders.name} */}
        <div className="row">
        <div className="col-sm-6 col-md-6">
        <h3> Today your working hours are: </h3>
        <p> 10:00am - 12:00pm </p>
        <p> 1:00pm - 3p:00m </p>
        <hr />
        <p> Note: Yesterday's delivered package was found.</p>
        </div>
        <div className="col-sm-6 col-md-6">
        <img src="../rider.jpg" id="riderIMG" id="riderProfilePic" />
        <br />
        <a href="">
          {" "}
          <i class="fa fa-pencil" aria-hidden="true" />Edit Profile Picture
        </a>
        </div>
        </div>
      </div>
    )
  }
}

export default RiderWelcome;

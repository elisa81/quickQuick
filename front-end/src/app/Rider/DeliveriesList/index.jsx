import React from "react";
import { Link } from "react-router-dom";
// import MapContainer from "../MapContainer";
import axios from "axios";
import DeliveryDetails from "../../DeliveryDetails";

class DeliveriesList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let mapDeliveries = this.props.deliveries.filter(delivery => {
      return delivery.status === "PENDING" 
    }).map((delivery, i) => {
      return (
        <li key={i} className="list-group-item">
          <div>
            {/* <Link to="/rider/AcceptedJobs"> */}
              {/*REDIRECT TO window.location = 'AcceptedJobs'; */}
              <button className="pull-right btn btn-warning" type="button" id="acceptButton" onClick={() => { 
                this.props.onSubmitAcceptDelivery(delivery._id)
                window.location = 'AcceptedJobs';
              }}>
                ACCEPT JOB
              </button>
            {/* </Link> */}
          </div>
          <div className="clearfix" />
          <DeliveryDetails delivery={delivery} />
            </li>
      );
    });


    return (
      <div>
        <h2>Available Jobs</h2>
        {mapDeliveries.length === 0 ? (
          <div>Waiting for job...</div>
        ) : (
          <div>
            <div className="panel panel-default">
              <ul className="list-group">
                {mapDeliveries}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DeliveriesList;

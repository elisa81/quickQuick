import React from "react";
// import MapContainer from "../MapContainer";
import axios from "axios";
import DeliveryDetails from "../DeliveryDetails";

class Tracking extends React.Component {
  constructor() {
    super();
    this.state = {
      deliveries: null
    };
  }

  componentWillMount() {
    this.getAllDeliveries().then(this.displayDeliveries);
  }

  getAllDeliveries = () => {
    return axios.get("http://localhost:8000/delivery");
  };

  displayDeliveries = response => {
    const deliveries = response.data;
    this.setState({
      deliveries
    });
  };



  getInProgressDeliveries = () => {
    return this.state.deliveries
      .filter(delivery => {
        return delivery.status === "IN_PROGRESS";
      })
      .map((request, i) => {
        return (
          <div key={i} className="list-group-item">
            <DeliveryDetails delivery={request} />
          </div>
        );
      });
  };



  getRequestedDeliveries = () => {
    return this.state.deliveries
      .filter(delivery => {
        return delivery.status === "PENDING";
      })
      .map((request, i) => {
        return (
          <div key={i} className="list-group-item">
            <DeliveryDetails delivery={request} />
          </div>
        );
      });
  };



  getCompletedDeliveries = () => {
    return this.state.deliveries
      .filter(delivery => {
        return delivery.status === "COMPLETED";
      })
      .map((request, i) => {
        return (
          <div key={i} className="list-group-item">
            <DeliveryDetails delivery={request} />
          </div>
        );
      });
  };



  render() {
    if (this.state.deliveries === null) {
      return <div>Loading...</div>;
    } else {
      return <div className="container">
          <h1>Your Deliveries</h1>
          <div className="col-sm-4 col-md-4">
            <h2>Request(s) Pending</h2>

            <div className="panel panel-default">
              <ul className="list-group">
                {this.getRequestedDeliveries()}
              </ul>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <h2>In Progress</h2>

            <div className="panel panel-default">
              <ul className="list-group">
                {this.getInProgressDeliveries()}
              </ul>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <h2>Completed</h2>

            <div className="panel panel-default">
              <ul className="list-group">
                {this.getCompletedDeliveries()}
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-6" id="riderMap" />
        </div>;
    }
  }
}

export default Tracking;

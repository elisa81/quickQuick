import React from "react";
import MapContainer from "../../MapContainer";
import axios from "axios";
import DeliveryDetails from "../../DeliveryDetails";

class AcceptedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getAllDeliveries().then(this.displayDeliveries);
  }

  getAllDeliveries = () => {
    return axios.get("http://localhost:8000/delivery");
  };

  displayDeliveries = response => {
    const deliveries = response.data.filter(delivery => {
      return delivery.status === "IN_PROGRESS";
    });
    this.setState({
      deliveries
    });
  };

  getInProgressDeliveries = () => {
    if (this.state.deliveries === undefined) {
      return "Loading...";
    } else {
      return this.state.deliveries
        .filter(delivery => {
          return delivery.status === "IN_PROGRESS";
        })
        .map((request, i) => {
          return (
            <div key={i} className="list-group-item">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.props.completedJob(request._id);
                }}
              >
                Delivered!
              </button>
              <DeliveryDetails delivery={request} />
            </div>
          );
        });
    }
  };

  render() {
    console.log(this.props.deliveries);
    let mapCompletedDeliveries = this.props.deliveries.filter(delivery => {
      return delivery.status === "IN_PROGRESS";
    });

    console.log(mapCompletedDeliveries);

    mapCompletedDeliveries = mapCompletedDeliveries.map((delivery, i) => {
      return <div key={i} className="list-group-item">
          <button type="button" className="btn btn-success" onClick={() => {
              this.props.completedJob(delivery._id);
            }}>
            Delivered!
          </button>
          <DeliveryDetails delivery={delivery} />
          <img src="../map.jpg" width="350px" />
        </div>;
    });

    console.log(mapCompletedDeliveries);

    return <div className="container">
        <div className="row">
          <h2>Accepted Jobs</h2>
          <div className="col-sm-12 col-md-12">
            <div className="list-group">{mapCompletedDeliveries}</div>
          </div>
        </div>
      </div>
  }
}

export default AcceptedJobs;

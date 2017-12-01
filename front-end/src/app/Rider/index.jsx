import React from "react";
import MapContainer from "../MapContainer";
import axios from "axios";
import DeliveryDetails from "../DeliveryDetails";
import { Switch, Route, Link } from "react-router-dom";
import AcceptedJobs from "./AcceptedJobs";
import DeliveriesList from "./DeliveriesList";
import RiderWelcome from "./RiderWelcome";

class Rider extends React.Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
      riders: []
    };
  }


  componentWillMount() {
    this.getAllDeliveries();
  }
  getAllDeliveries = () => {
    let promise = axios.get("http://localhost:8000/delivery");
    promise.then(response => {
      // console.log(response.data)
      this.setState({
        deliveries: response.data
      });
    });
  };

  onSubmitAcceptDelivery = deliveryId => {
    console.log("hello");
    axios
      .put("http://localhost:8000/delivery ", {
        deliveryId: deliveryId,
        status: "IN_PROGRESS"
      })
      .then(response => {
        console.log(response);

      });
  };



  completedJob = deliveryId => {
    axios
      .put("http://localhost:8000/delivery", {
        deliveryId: deliveryId,
        status: "COMPLETED"
      })
      .then(response => {
        console.log(response)

        let index = this.state.deliveries.findIndex(delivery => {
          return delivery._id === deliveryId;
        });

        this.state.deliveries[index].status = "COMPLETED";

        this.setState({ deliveries: this.state.deliveries });
      });
    alert("Good Job!");
  };



  getAvailableDeliveries = () => {
    console.log("Get Deliveries");
    return this.state.deliveries
      .filter(delivery => {
        return delivery.status === "IN_PROGRESS";
      })
      .map((request, i) => {
        return (
          <div key={i} className="list-group-item">
            <h2>PICK-UP</h2>{" "}
            <button
              type="button"
              onClick={() => {
                this.onSubmitAcceptDelivery(request._id);
              }}
            >
              Accept
            </button>
            <DeliveryDetails delivery={request} />
          </div>
        );
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

  render() {
    return (
      <div className="container">
        <h1>Rider's Portal </h1>
        <Link to="/rider"> Home </Link> |
        <Link to="/rider/DeliveriesList"> Delivery List </Link> |
        <Link to="/rider/AcceptedJobs"> Accepted Job</Link>
        <hr />
        <Switch>
          <Route exact path="/rider" 
            component={RiderWelcome}
            riders={this.state.riders}   />

          <Route
            exact
            path="/rider/DeliveriesList"
            render={state => (
              <DeliveriesList
                deliveries={this.state.deliveries}
                onSubmitAcceptDelivery={this.onSubmitAcceptDelivery}
                {...state}
              />
            )}
          />

          <Route
            exact
            path="/rider/AcceptedJobs"
            render={state => (
              <AcceptedJobs deliveries={this.state.deliveries} completedJob=
              {this.completedJob}
              {...state}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Rider;

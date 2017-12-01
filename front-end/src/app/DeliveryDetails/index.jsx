import React from "react";

export default function DeliveryDetails(props) {
  const { delivery } = props;
  return (
    
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h2>Pick-Up</h2>
          <p>First Name: {delivery.pickFName}</p>
          <p>Last Name: {delivery.pickLName}</p>
          <p>Address: {delivery.pickAddress}</p>
          <p>Telephone: {delivery.pickPhone}</p>
        </div>
        <div className="col-md-6 col-sm-6">
          <h2>Drop-Off</h2>
          <p>First Name: {delivery.dropFName}</p>
          <p>Last Name: {delivery.dropLName}</p>
          <p>Address: {delivery.dropAddress}</p>
          <p>Telephone: {delivery.dropPhone}</p>
          <p>Special Request: {delivery.specialRequest}</p>
        </div>
      </div>
    </div>
  )
}

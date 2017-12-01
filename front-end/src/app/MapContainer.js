import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends React.Component {
    constructor() {
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: []
    }
  }

render() {
    return (
        <Map google={this.props.google}
          style={{ height: '35%', width: '80%' }}
          zoom={14}
          initialCenter={{
            lat: 49.2851,
            lng: -123.1147
          }}
        >

          <Marker onClick={this.onMarkerClick}
            name={'Current Location'}
          />

          <InfoWindow
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            visible={this.state.showingInfoWindow}>

          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
          </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCwX1X4jmbvPa5Idhk-ur9PusUZqpMrv48"
})(MapContainer)

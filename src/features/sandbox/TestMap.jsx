import React from "react";
import GoogleMapReact from 'google-map-react';
import { Icon } from "semantic-ui-react";

export default function TestMap({location}){
  

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBq30RUJTRYciHHFTUSd8o06JAs6OkLqdc" }}
        center={location.center}
        zoom={location.zoom}
      >
        <Icon name="map marker alternate" color="red"/>
      </GoogleMapReact>
    </div>
  );
}
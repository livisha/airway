import React from "react";
import { geolocated } from "react-geolocated";

const LocationDemo = (props) => {
  return !props.isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !props.isGeolocationAvailable ? (
    <div>Geolocation is not enabled</div>
  ) : this.props.coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitute</td>
          <td>{props.coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{props.coords.longitude}</td>
        </tr>
        <tr>
          <td>altitude</td>
          <td>{props.coords.altitude}</td>
        </tr>
        <tr>
          <td>heading</td>
          <td>{props.coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{props.coords.speed}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip;</div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(LocationDemo);

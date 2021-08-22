import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { SiAddthis } from "react-icons/";
import "./rlstyle.css";

function ReviewList() {
  const numbers = [
    {
      name: "chris",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "nick",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "chris",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "chris",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "chris",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "chris",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    }
  ];
  return (
    <div className="back">
      <div className="filgthslist">
        <ol>
          <h1 id="head">Flights:</h1>
          {numbers.map((flight) => (
            <p className="each-flight">
              <li>
                {flight.name} ({flight.departuretime} - {flight.arrivaltime}){" "}
                <Link className="Link-feedback" to="/Review">
                  Hit Me
                </Link>
              </li>
            </p>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ReviewList;

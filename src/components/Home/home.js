import React, { useState, useMemo } from "react";
import { Switch, Route, Link } from "react-router-dom";
import WeatherWidget from "../Weather/WeatherWidget";
import InputLocation from "../Weather/InputLocation";
import LocationDemo from "../Weather/LocationDemo";
import { LocationContext } from "../Weather/contexts/LocationContext";
import ReactNotification from "react-notifications-component";

import "../../App";
import "./homestyle.css";

const Home = ({ handleLogout }) => {
  const INITIAL_STATE = { city: "", country: "" };
  const getSavedLocation = () => {
    const isReturningUser = "location" in localStorage;
    const savedLocation = JSON.parse(localStorage.getItem("location"));

    if (isReturningUser) {
      return savedLocation;
    } else {
      return INITIAL_STATE;
    }
  };
  const [location, setLocation] = useState(getSavedLocation());
  const providerValue = useMemo(
    () => ({ location, setLocation, INITIAL_STATE }),
    [location, setLocation, INITIAL_STATE]
  );

  return (
    <div>
      <div className="nav-bar-box">
        <nav className="navbar" id="nav" height="40rem">
          <h3 className="heading">AirWAY</h3>
          <div className="profile-logout">
            <div className="input-group-append">
              <img
                src="data:image/png;base64,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"
                width="50rem"
                right
                height="40rem"
                className="btn btn-outline-secondary"
                alt="profile"
              ></img>
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only"></span>
              </button>
              <div className="dropdown-menu">
                <i onClick={handleLogout}>
                  <span class="material-icons-outlined">
                    <h5 className="drop-button">Logout</h5>
                  </span>
                </i>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="home">
        <div className="complete-block">
          {/* <div class="col-lg-8 mx-auto"> */}
          <div class="bg-white p-5 rounded shadow block">
            <form className="filght-search">
              <div class="row mb-4">
                <div class="form-group col-md-9">
                  <input
                    id="exampleFormControlInput5"
                    placeholder="Departure Location?"
                    class="form-control form-control-underlined"
                  ></input>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-9">
                  <input
                    id="exampleFormControlInput6"
                    placeholder="Arrival Location?"
                    class="form-control form-control-underlined"
                  ></input>
                </div>
                <div class="form-group col-md-3">
                  {" "}
                  <Link to="/ReviewList">
                    <button
                      type="button"
                      class="btn btn-primary rounded-pill btn-block shadow-sm"
                    >
                      HitMe!
                    </button>
                  </Link>
                </div>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
        <div className="weather-block">
          <div className="temp">
            <LocationContext.Provider value={providerValue}>
              <ReactNotification />
              <Switch>
                <Route exact path="/" component={InputLocation} />
                <Route exact path="/weather" component={WeatherWidget} />
                <Route path="/location" component={LocationDemo} />
              </Switch>
            </LocationContext.Provider>
          </div>
        </div>
        <div className="review-row">
          <div class="review-grid">
            <div class="review-card">
              <div class="block-text rel zmin">
                <h1>Hercules</h1>
                <div class="mark">
                  My rating:{" "}
                  <span class="rating-input">
                    <span
                      data-value="0"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="1"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="2"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="3"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="4"
                      class="glyphicon glyphicon-star-empty"
                    ></span>
                    <span
                      data-value="5"
                      class="glyphicon glyphicon-star-empty"
                    ></span>{" "}
                  </span>
                </div>
                <p>
                  Never before has there been a good film portrayal of ancient
                  Greece's favourite myth. So why would Hollywood start now?
                  This latest attempt at bringing the son of Zeus to the big
                  screen is brought to us by X-Men: The last Stand director
                  Brett Ratner. If the name of the director wasn't enough to
                  dissuade ...
                </p>
                <ins class="ab zmin sprite sprite-i-triangle block"></ins>
              </div>
              <div class="person-text rel">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo1-Qzeg-lRXwne6xFoAFRu8ss3D8Mr0D3A&usqp=CAU"
                  width="50rem"
                  height="50rem"
                  alt="img"
                ></img>
                <h1>Anna</h1>
                <i>from Glasgow, Scotland</i>
              </div>
            </div>
            <div class="review-card">
              <div class="block-text rel zmin">
                <h1>The Purge: Anarchy</h1>
                <div class="mark">
                  My rating:{" "}
                  <span class="rating-input">
                    <span
                      data-value="0"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="1"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="2"
                      class="glyphicon glyphicon-star-empty"
                    ></span>
                    <span
                      data-value="3"
                      class="glyphicon glyphicon-star-empty"
                    ></span>
                    <span
                      data-value="4"
                      class="glyphicon glyphicon-star-empty"
                    ></span>
                    <span
                      data-value="5"
                      class="glyphicon glyphicon-star-empty"
                    ></span>{" "}
                  </span>
                </div>
                <p>
                  The 2013 movie "The Purge" left a bad taste in all of our
                  mouths as nothing more than a pseudo-slasher with a hamfisted
                  plot, poor pacing, and a desperate attempt at "horror." Upon
                  seeing the first trailer for "The Purge: Anarchy," my first
                  and most immediate thought was "we really don't need another
                  one of these."{" "}
                </p>
                <ins class="ab zmin sprite sprite-i-triangle block"></ins>
              </div>
              <div class="person-text rel">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo1-Qzeg-lRXwne6xFoAFRu8ss3D8Mr0D3A&usqp=CAU"
                  width="50rem"
                  height="50rem"
                  alt="img"
                ></img>
                <h1>Ella Mentree</h1>
                <i>United States</i>
              </div>
            </div>
            <div class="review-card">
              <div class="block-text rel zmin">
                <h1>Planes: Fire & Rescue</h1>
                <div class="mark">
                  My rating:{" "}
                  <span class="rating-input">
                    <span
                      data-value="0"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="1"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="2"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="3"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="4"
                      class="glyphicon glyphicon-star"
                    ></span>
                    <span
                      data-value="5"
                      class="glyphicon glyphicon-star"
                    ></span>{" "}
                  </span>
                </div>
                <p>
                  What a funny and entertaining film! I did not know what to
                  expect, this is the fourth film in this vehicle's universe
                  with the two Cars movies and then the first Planes movie. I
                  was wondering if maybe Disney pushed it a little bit. However,
                  Planes: Fire and Rescue is an entertaining film that is a
                  fantastic sequel in this magical franchise.{" "}
                </p>
                <ins class="ab zmin sprite sprite-i-triangle block"></ins>
              </div>
              <div class="person-text rel">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo1-Qzeg-lRXwne6xFoAFRu8ss3D8Mr0D3A&usqp=CAU"
                  width="50rem"
                  height="50rem"
                  alt="img"
                ></img>
                <h1>Rannynm</h1>
                <i>Indonesia</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

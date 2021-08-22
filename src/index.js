import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewList from "./components/ReviewList/reviewlist.js";
import Home from "./components/Home/home.js";
import App from "./App.js";
import Weather from "./components/Weather/WeatherWidget";
import Review from "./components/Review/review.js";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/ReviewList" component={ReviewList}></Route>
      <Route exact path="/Weather" component={Weather}></Route>
      <Route exact path="/Review" component={Review}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

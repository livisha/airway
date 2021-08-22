import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Home from "../Home/home.js";
export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <div class="jumbotron">
              <h1 class="display-4">Thank You For Your Submission!</h1>
              <p class="lead">
                Your review will help us to improve our facilities. Hope you
                will visit us soon...!
              </p>
              <hr class="my-4"></hr>
              <p>You will get an email with further instructions.</p>
              <p class="lead">
                {/* <Link className="Link-feedback" to="/Home"> */}
                get back.....
                <Link to="/Home">
                  <button type="button">Click Me!</button>
                </Link>
                {/* </Link> */}
              </p>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;

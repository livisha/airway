import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./rstyle.css";

export class UserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <AppBar title="Enter User Details" />
        <div className="review-block">
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              class="form-control form-control-underlined"
            ></input>
          </div>
          <br />
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              class="form-control form-control-underlined"
            ></input>
          </div>
          <br />
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              class="form-control form-control-underlined"
            ></input>
          </div>
          <br />
          <Button
            class="btn btn-primary"
            color="primary"
            variant="contained"
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserDetail;

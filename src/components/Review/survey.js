import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class SurveyDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Personal Details" />
            <div className="review-block">
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Occupation"
                  label="Occupation"
                  onChange={handleChange("occupation")}
                  defaultValue={values.occupation}
                  class="form-control form-control-underlined"
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your City"
                  label="City"
                  onChange={handleChange("city")}
                  defaultValue={values.city}
                  class="form-control form-control-underlined"
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Bio"
                  label="Bio"
                  onChange={handleChange("bio")}
                  defaultValue={values.bio}
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
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default SurveyDetail;

import React, { useContext } from "react";
import styled from "styled-components";
import { store } from "react-notifications-component";
import { LocationContext } from "./contexts/LocationContext";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  label {
    display: block;
    margin-top: 1rem;
    font-family: "Kanit", sans-serif;
  }

  input {
    display: block;
    border-radius: 4px;
    margin: 0rem auto;
    color: blacksmoke;
    font-family: "Kanit", sans-serif;
  }

  h4 {
    margin-top: 1rem;
  }

  button {
    border: 1px solid #dbe7fc;
    background-color: white;
    padding: 15px 25px;
    margin-top: 3rem;
    border-radius: 50px;
    font-family: "Kanit", sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const InputLocation = (props) => {
  const { location, setLocation, INITIAL_STATE } = useContext(LocationContext);

  const handleChange = (e) =>
    setLocation({ ...location, [e.target.name]: e.target.value });

  const SubmitLocation = (e) => {
    e.preventDefault();
    if (location.city && location.country) {
      localStorage.setItem("location", JSON.stringify(location));
      props.history.push("/weather");
    } else {
      store.addNotification({
        title: "Input Error!",
        message:
          "Can't figure out your weather without your location, try again 😋",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      });
      setLocation(INITIAL_STATE);
    }
  };

  return (
    <Wrapper className="input-location">
      <h4>Input your location</h4>
      <form onSubmit={SubmitLocation} class="location-form">
        <label htmlFor="city">City</label>
        <input
          type="text"
          value={location.city}
          onChange={handleChange}
          name="city"
          id="city"
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          value={location.country}
          onChange={handleChange}
          name="country"
          id="country"
        />
        <button type="submit" className="get-location">
          Get weather details
        </button>
      </form>
    </Wrapper>
  );
};

export default withRouter(InputLocation);

import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const Wrapper = styled.div`
  width: 100px;
  .cloud-img {
    height: 2rem;
  }

  .weather-card {
    &__day {
      color: #5b72a9;
    }

    &__tempt {
      display: block;
      font-size: 1rem;
      color: #6790de;
    }

    &__weather {
      display: block;
      font-size: 0.5rem;
      color: #677db1;
    }

    &__max-tempt {
      color: white;
      margin-right: 0.25rem;
    }

    &__min-tempt {
      color: white;
    }
  }
`;

const WeatherCard = ({ data }) => {
  const { dt_txt, main, weather } = data;
  const { temp, temp_min, temp_max } = main;
  const { icon } = weather[0];

  return (
    <Wrapper className="weather-card">
      <Moment format="LT" className="weather-card__day">
        {dt_txt}
      </Moment>
      <div className="weather-card__image">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="img"
          className="cloud-img"
        />
      </div>
      <span className="weather-card__tempt">{temp}°</span>
      <span className="weather-card__weather">{weather[0].main}</span>
      <span className="weather-card__max-tempt">{temp_max}°</span>
      <span className="weather-card__min-tempt">{temp_min}°</span>
    </Wrapper>
  );
};

export default WeatherCard;

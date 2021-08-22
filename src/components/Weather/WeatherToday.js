import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .cloud {
    height: 2rem;
  }

  .label {
    color: #b8cdfe;
    font-size: 0.9rem;
    margin-right: 0.5em;
  }

  .value {
    color: #ffffff;
  }

  .ave-tempt__value {
    display: block;
    font-size: 1rem;
    font-weight: 10;
    background: -webkit-linear-gradient(#eef4fe, #c0dbff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ave-tempt__label {
    display: block;
    color: #b9ceff;
  }

  .today-section {
    height: 50px;

    &__date {
      color: #b9ceff;
    }

    &__temperature,
    &__wind {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const WeatherToday = () => {
  return (
    <Wrapper>
      <span className="today-section__date">Sep 12</span>
      <div className="today-section__weather-icon">
        <img
          className="cloud"
          src={`http://openweathermap.org/img/wn/02d@2x.png`}
          alt=""
        />
      </div>

      <div className="today-section__temperature">
        <div className="min-tempt">
          <span className="label">Min:</span>
          <span className="value">25°</span>
        </div>

        <div className="ave-tempt">
          <span className="ave-tempt__value">27°c</span>
          <span className="ave-tempt__label">Average temperature</span>
        </div>

        <div className="max-tempt">
          <span className="label">Max:</span>
          <span className="value">31°</span>
        </div>
      </div>

      <div className="today-section__wind">
        <div className="wind__info">
          <span className="label">Wind direct:</span>
          <span className="value">North</span>
        </div>
        <div className="wind__info">
          <span className="label">Wind speed:</span>
          <span className="value">North: 9km/s</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default WeatherToday;

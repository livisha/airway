import React from "react";
import WeatherCard from "./WeatherCard";

const ForecastCards = ({ list }) => {
  return (
    <div className="weather-row">
      <div className="weather-grid">
        {list.map((item, index) => (
          <WeatherCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ForecastCards;

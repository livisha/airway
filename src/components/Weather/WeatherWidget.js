import React, { useContext } from "react";
import useFetch from "./hooks/useFetch";
import ForecastCards from "./ForecastCards";
import { LocationContext } from "./contexts/LocationContext";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { MdSort, MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";
import WeatherToday from "./WeatherToday";

const LoaderWrapper = styled.div`
  margin-top: 5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;

  button {
    border: 1px solid #dbe7fc;
    background: transparent;
    border-radius: 50px;
    color: #dbe7fc;
    font-size: 1rem;
    font-weight: 20;
  }
`;

const WeatherWidget = () => {
  const { location } = useContext(LocationContext);
  const { data, list, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location.city},${location.country}&units=metric`
  );

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader type="Puff" color="#dbe7fc" height={100} width={100} />
        </LoaderWrapper>
      ) : (
        <>
          <NavWrapper>
            <IconContext.Provider
              value={{
                color: "#dbe7fc",
                className: "global-class-name",
                size: "1.5rem"
              }}
            >
              <MdSort />
              <span>{data.city.name}</span>
              <MdLocationOn />
            </IconContext.Provider>
          </NavWrapper>

          <WeatherToday />

          <ForecastCards list={list} />

          <ButtonContainer>
            <Link to="/">
              <button>Try another location</button>
            </Link>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default WeatherWidget;

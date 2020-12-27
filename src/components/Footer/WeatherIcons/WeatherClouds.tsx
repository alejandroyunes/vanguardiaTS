import React, { FC } from "react";
import "./WeatherIcons.scss";


const WeatherClouds: FC = () => {
  return (
    <>

      <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

    </>
  );
};
export default WeatherClouds;

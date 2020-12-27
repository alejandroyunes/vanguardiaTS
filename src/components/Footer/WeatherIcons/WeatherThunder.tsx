import React, { FC } from "react";
import "./WeatherIcons.scss";


const WeatherThunder: FC = () => {
    return (

<div className="icon thunder-storm">
  <div className="cloud"></div>
  <div className="lightning">
    <div className="bolt"></div>
    <div className="bolt"></div>
  </div>
</div>


    );
};
export default WeatherThunder;

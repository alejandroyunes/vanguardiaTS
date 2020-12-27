import React, { FC } from "react";
import "./WeatherIcons.scss";


const WeatherRain: FC = () => {
    return (
        <>
            <div className="icon rainy">
                <div className="cloud"></div>
                <div className="rain"></div>
            </div>
        </>
    );
};
export default WeatherRain;

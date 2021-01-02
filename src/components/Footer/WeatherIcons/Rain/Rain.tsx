import React from "react";
import '../sass/WeatherIcons.scss'

export default function Rain() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                className="svg"
                viewBox="0 0 100 100"
            >
                <g id="rain">
                    <path
                        id="drop1"
                        fill="url(#XMLID_19_)"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeOpacity="0.5"
                        strokeWidth="0.5"
                        d="M33.8 67.2s-10.4 14.3 0 14.3c10.6 0 0-14.3 0-14.3z"
                        className="raindrop"
                    ></path>
                    <path
                        id="drop2"
                        fill="url(#XMLID_19_)"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeOpacity="0.5"
                        strokeWidth="0.5"
                        d="M48.2 67s-10.4 14.3 0 14.3c10.6 0 0-14.3 0-14.3z"
                        className="raindrop"
                    ></path>
                    <linearGradient
                        id="XMLID_19_"
                        x1="57.789"
                        x2="67.118"
                        y1="74.105"
                        y2="74.105"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.472" stopColor="#5CCAEB"></stop>
                        <stop offset="0.534" stopColor="#51B1CD"></stop>
                    </linearGradient>
                    <path
                        id="drop3"
                        fill="url(#XMLID_19_)"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeOpacity="0.5"
                        strokeWidth="0.5"
                        d="M62.4 67s-10.4 14.3 0 14.3c10.6 0 0-14.3 0-14.3z"
                        className="raindrop"
                    ></path>
                </g>
                <g id="bigCloudRain">
                    <path
                        id="XMLID_1_"
                        fill="#F4F4F4"
                        stroke="#515251"
                        strokeMiterlimit="10"
                        strokeOpacity="0.08"
                        strokeWidth="0.5"
                        d="M22.3 65.5s-8.9-2.9-9.3-12.8 10-11.3 11.4-10.1c0 0 2.5-8.4 10.1-8.6 0 0 3.5-13.4 17.8-13.1 0 0 15.6-.8 17.9 16.4 0 0 12.9-1 13.4 15.1 0 0-1.4 10.9-11.9 13.1 0 0-12 2-13.8-2.3-.2 2.1-15 6-19.6 0-4.5 5.2-16 2.3-16 2.3z"
                    ></path>
                </g>
            </svg>
        </>
    );
}


import React from "react";
import '../sass/WeatherIcons.scss'

export default function Thunder() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 100">
                <path
                    id="thunder"
                    fill="#FAC73F"
                    d="M45.6 61.5L39.4 77.6 47.6 77.4 43.1 91.9 44.3 91.9 59.3 73.5 51.4 73.4 58.7 61.5z"
                ></path>
                <g id="smallcloud">
                    <path
                        id="XMLID_3_"
                        fill="#F4F4F4"
                        stroke="#6D6E71"
                        strokeMiterlimit="10"
                        strokeOpacity="0.08"
                        strokeWidth="0.5"
                        d="M19 39.9s5.7 1.7 7-1.2c5.4 3 9.1.6 11.5 0 .5 2.3 6.1 1.2 6.1 1.2s10.7-2.6 9.9-11.7c0 0-1.9-12.4-14-10 0 0-9.7-9.5-18.6 2.5 0 0-9-.5-10.3 10 0 0 .3 7.1 8.4 9.2z"
                    ></path>
                </g>
                <g id="bigClouds">
                    <path
                        id="XMLID_16_"
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


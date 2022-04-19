import React from "react";
import "./AboutUs.scss";
import linkedin from ".././../assets/people/alejo-developer.png";
export default function AboutUs() {
  return (
    <>
      <div className="about-us-info">
        <div className="about-child-one">
          <h1>
            Soy un desarrollador autodidacta con más de 3 años de experiencia en
            Javascript y React. También tengo varios años de experiencia
            profesional en el área de IT.
          </h1>
        </div>
        <div className="about-child-two">
          <img className="about-logo" src={linkedin} alt="" />
        </div>
      </div>
      <div className="wrapper">
        <div className="about-child-two">
          <h1 className="about-main-title">
            Diseño web y móvil personalizado. Desarrollo en librerías y de
            última generación como React, NextJS, React Native.
          </h1>
        </div>
        <div className="child-three">
          <p></p>
        </div>
      </div>
    </>
  );
}

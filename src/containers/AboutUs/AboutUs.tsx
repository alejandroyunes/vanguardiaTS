import React from "react";
import "./AboutUs.scss";
import aboutLogo from ".././../assets/ff.png";
import aboutMarketing from ".././../assets/deskeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import linkedin from ".././../assets/linkedin.svg";

export default function AboutUs() {
  return (
    <>
      <div className="wrapper">
        <div className="about-child-one">
          <img className="about-logo" src={aboutLogo} />
        </div>
        <div className="about-child-two">
          <h1 className="about-main-title">
            Bienvenido al nuevo Firefox Quantum: Developer Edition
          </h1>
        </div>
        <div className="child-three">
          <p>
            Firefox se ha rediseñado desde cero para ser más rápido, elegante y
            poderoso que nunca.
          </p>
        </div>
      </div>

   
      <div className="about-us-info">
        <div className="about-child-one">
          <h1>Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.</h1>
        </div>
        <div className="about-child-two">
          <img className="about-logo" src={linkedin} />
        </div>
      </div>
    </>
  );
}

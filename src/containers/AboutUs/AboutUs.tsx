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
        <div className="child-one">
          <img className="about-logo" src={aboutLogo} />
        </div>
        <div className="child-two">
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

      <div className="about-us-icons">
        <div className="child-one">
          <img className="about-logo" src={aboutMarketing} />
          <h4>It can be a fuss to collect images from websites</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
        <div className="child-two">
          <img className="about-logo" src={aboutBox} />
          <h4>Lack of efficiency to organizing assets</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
        <div className="child-three">
          <img className="about-logo" src={aboutIllustrator} />
          <h4>Finding assets become mission impossible</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
      </div>

      <div className="about-us-info">
        <div className="child-one">
          <h1>Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.</h1>
        </div>
        <div className="child-two">
          <img className="about-logo" src={linkedin} />
        </div>
      </div>
    </>
  );
}

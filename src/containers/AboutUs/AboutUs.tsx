import React from "react";
import "./AboutUs.scss";
import linkedin from ".././../assets/team.png";
export default function AboutUs() {
  return (
    <>
      <div className="wrapper">
      
        <div className="about-child-two">
          <h1 className="about-main-title">
          Somos un grupo de profesionales en las áreas de diseño y desarrollo web.
          </h1>
        </div>
        <div className="child-three">
          <p>
          Planteamos soluciones basadas en el entendimiento estratégico y analítico de su negocio.
          </p>
        </div>
      </div>

   
      <div className="about-us-info">
        <div className="about-child-one">
          <h1>Estudio de diseño y desarrollo web que entrega un trabajo superlativo para startups, agencias o cualquier ser humano.</h1>
        </div>
        <div className="about-child-two">
          <img className="about-logo" src={linkedin}  alt=""/>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Services.scss";
import aboutMarketing from ".././../assets/deskeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import Title from "../../components/Title/Title";


import servicesImg from "../../assets/services.jpg";
import HtmlSvg from "../../assets/html.svg";
import CssSvg from "../../assets/css.svg";
import JsSvg from "../../assets/javascript.svg";
import ReactSvg from "../../assets/reactsvg.svg";
import NodeSvg from "../../assets/node-js.svg";
import WordpressSvg from "../../assets/wordpress.svg";
import TypescriptSvg from "../../assets/typescript.svg";
import NginxSvg from "../../assets/nginx-n.svg";
import ApacheSvg from "../../assets/apache.svg";

export default function Services() {
  return (
    <>
      <div className="services-page-hero">
<img src={servicesImg}/>
      </div>


      <Title message={"Technologies"} title={""} />

      <div className="services-tech">
        <div className="services-tech-container">
          <div className="html-svg">
            <img src={HtmlSvg} />
          </div>
          <div className="css-svg">
            <img src={CssSvg} />
          </div>
          <div className="js-svg">
            <img src={JsSvg} />
          </div>
          <div className="react-svg">
            <img src={ReactSvg} />
          </div>
          <div className="node-svg">
            <img src={NodeSvg} />
          </div>
          <div className="typescript-svg">
            <img src={TypescriptSvg} />
          </div>
          <div className="apache-svg">
            <img src={ApacheSvg} />
          </div>
          <div className="nginx-svg">
            <img src={NginxSvg} />
          </div>
          <div className="wordpress-svg">
            <img src={WordpressSvg} />
          </div>
        </div>
      </div>

      <div className="services-tech-mobile">
        <div className="services-tech-mobile-container">
          <div className="services-tech-mobile-child-one">
            <div className="node-svg">
              <img src={NodeSvg} />
            </div>
            <div className="typescript-svg">
              <img src={TypescriptSvg} />
            </div>
            <div className="apache-svg">
              <img src={ApacheSvg} />
            </div>
            <div className="nginx-svg">
              <img src={NginxSvg} />
            </div>
            <div className="wordpress-svg">
              <img src={WordpressSvg} />
            </div>
          </div>
          <div className="services-tech-mobile-child-two">
            <div className="html-svg">
              <img src={HtmlSvg} />
            </div>
            <div className="css-svg">
              <img src={CssSvg} />
            </div>
            <div className="js-svg">
              <img src={JsSvg} />
            </div>
            <div className="react-svg">
              <img src={ReactSvg} />
            </div>
          </div>
        </div>
      </div>

      <div className="services-three-columns">
        <div className="services-three-columns-child-one">
          <img className="about-logo" src={aboutMarketing} />
          <h4>It can be a fuss to collect images from websites</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
        <div className="services-three-columns-child-two">
          <img className="about-logo" src={aboutBox} />
          <h4>Lack of efficiency to organizing assets</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
        <div className="services-three-columns-child-three">
          <img className="about-logo" src={aboutIllustrator} />
          <h4>Finding assets become mission impossible</h4>
          <p>
            Collecting images are always a nightmare, especially with all the
            procedures and when there are more than one.
          </p>
        </div>
      </div>
    </>
  );
}

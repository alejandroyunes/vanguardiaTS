import React from "react";
import "./Services.scss";
import Title from "../../components/Title/Title";


import WebDesign from '../../components/ImageGallery/Assets/WebDesign/WebDesign'
import DigitalMarketing from '../../components/ImageGallery/Assets/DigitalMarketing/DigitalMarketing'

import Branding from '../../components/ImageGallery/Assets/Branding/Branding'

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
      
      <Title message={"Servicios"} title={""} />
      <div className="services-main-content">
        <p>Somos una empresa de diseño y desarrollo web, que crea sitios web que generan tráfico, participación y conversión para marcas y startups líderes en la industria en Silicon Valley.</p>
      </div>

      <div className="services-three-columns">
        <div className="services-three-columns-child-one">
          {/* <img className="about-logo" src={aboutMarketing} /> */}
          
          <div className="design-svg">
          <WebDesign/>
          </div>
          <h4>Web Design</h4>
          <p>
            Páginas Web, Tiendas virtuales, Blogs, LandingPage, template.
          </p>
        </div>
        <div className="services-three-columns-child-two">
          {/* <img className="about-logo" src={aboutBox} /> */}
          <div className="design-svg">
          <DigitalMarketing/>
          </div>
          <h4>Marketing Digital</h4>
          <p>
            Creamos estrategias para que tu marca tenga un impacto en internet.
          </p>
        </div>
        <div className="services-three-columns-child-three">
          {/* <img className="about-logo" src={aboutIllustrator} /> */}
          <div className="design-svg-2">
          <Branding/>
          </div>
          <h4>Branding / Marca</h4>
          <p>
            Diseñamos y estructuramos la identidad de tu marca sostenible en el tiempo.
          </p>
        </div>
      </div>
      <br />
      <Title message={"Tecnologías"} title={""} />

      <div className="services-tech">
        <div className="services-tech-container">
          <div className="html-svg">
            <img src={HtmlSvg} alt=""/>
          </div>
          <div className="css-svg">
            <img src={CssSvg} alt=""/>
          </div>
          <div className="js-svg">
            <img src={JsSvg} alt=""/>
          </div>
          <div className="react-svg">
            <img src={ReactSvg} alt=""/>
          </div>
          <div className="node-svg">
            <img src={NodeSvg} alt=""/>
          </div>
          <div className="typescript-svg">
            <img src={TypescriptSvg} alt=""/>
          </div>
          <div className="apache-svg">
            <img src={ApacheSvg} alt=""/>
          </div>
          <div className="nginx-svg">
            <img src={NginxSvg} alt=""/>
          </div>
          <div className="wordpress-svg">
            <img src={WordpressSvg} alt=""/>
          </div>
        </div>
      </div>

      <div className="services-tech-mobile">
        <div className="services-tech-mobile-container">
          <div className="services-tech-mobile-child-one">
            <div className="node-svg">
              <img src={NodeSvg} alt=""/>
            </div>
            <div className="typescript-svg">
              <img src={TypescriptSvg} alt=""/>
            </div>
            <div className="apache-svg">
              <img src={ApacheSvg} alt=""/>
            </div>
            <div className="nginx-svg">
              <img src={NginxSvg} alt="" />
            </div>
            <div className="wordpress-svg">
              <img src={WordpressSvg} alt=""/>
            </div>
          </div>
          <div className="services-tech-mobile-child-two">
            <div className="html-svg">
              <img src={HtmlSvg} alt=""/>
            </div>
            <div className="css-svg">
              <img src={CssSvg} alt=""/>
            </div>
            <div className="js-svg">
              <img src={JsSvg} alt=""/>
            </div>
            <div className="react-svg">
              <img src={ReactSvg} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

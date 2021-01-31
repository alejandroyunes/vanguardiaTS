import React from "react";
import "./Services.scss";
import aboutMarketing from ".././../assets/deskeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import Title from "../../components/Title/Title";


import WebDesign from '../../components/ImageGallery/Assets/WebDesign/WebDesign'
import DigitalMarketing from '../../components/ImageGallery/Assets/DigitalMarketing/DigitalMarketing'

import Branding from '../../components/ImageGallery/Assets/Branding/Branding'

import servicesHeroImg from "../../assets/services/services-hero-desktop.jpg";
import serviceHeroSmallImg from "../../assets/services/services-hero-mobile-small.jpg"

import serviceHeroSmallerImg from "../../assets/services/services-hero-mobile-smaller.jpg"

import servicesImgMobile from "../../assets/services/services-hero-mobile.jpg";
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
        <img srcSet={` ${serviceHeroSmallImg} 700w, ${servicesHeroImg}`}
          sizes={`(max-width: 440px) 440px, 2200px,  
          src=${serviceHeroSmallImg} 700w,
          src=${servicesHeroImg} 2000w,
          
         alt="Some text"`} />


{/* <img src={servicesHeroImg} alt="services" /> */}
      </div>
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

      <br />
    </>
  );
}

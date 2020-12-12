import React from "react";
import "./Services.scss";
import aboutMarketing from ".././../assets/deskeagle.svg";
import aboutBox from ".././../assets/boxeagle.svg";
import aboutIllustrator from ".././../assets/illustraeagle.svg";
import Title from "../../components/Title/Title";


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
      <Title message={"Services"} title={""} />
      <div className="services-main-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta velit cupiditate laudantium ipsam quo, officiis quas temporibus explicabo corporis nisi ex, necessitatibus voluptatibus suscipit quibusdam fugiat? Sunt dolorum delectus autem veniam sed mollitia? Iure enim, quidem officiis repudiandae adipisci corporis et. Laudantium sint hic illo repudiandae expedita magni placeat obcaecati voluptates, rem voluptas aspernatur culpa nesciunt ipsam illum officiis reprehenderit cumque ea neque. Nemo molestiae aut explicabo sequi, excepturi porro rerum ea ut quisquam harum corrupti dicta earum ullam fugit mollitia possimus dolore dignissimos veniam nostrum in facere. Accusamus maiores dignissimos nam corrupti ipsam molestias? Cum repellendus impedit sequi.</p>
      </div>

      <div className="services-three-columns">
        <div className="services-three-columns-child-one">
          <img className="about-logo" src={aboutMarketing} />
          <h4>Web Design</h4>
          <p>
            Páginas Web, Tiendas virtuales, Blogs, LandingPage, template.
          </p>
        </div>
        <div className="services-three-columns-child-two">
          <img className="about-logo" src={aboutBox} />
          <h4>Marketing Digital</h4>
          <p>
            Creamos estrategias para que tu marca tenga un impacto en internet.
          </p>
        </div>
        <div className="services-three-columns-child-three">
          <img className="about-logo" src={aboutIllustrator} />
          <h4>Branding / Marca</h4>
          <p>
            Diseñamos y estructuramos la identidad de tu marca sostenible en el tiempo.
          </p>
        </div>
      </div>
      <br />
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

      <br />
    </>
  );
}

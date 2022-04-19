import React from "react";
import "./Portfolio.scss";
import portfolioRestaurant from "../../assets/portfolio/portfolio-restaurant.jpg";
import iphoneCase from "../../assets/portfolio/iphone.jpg";
import rdsWebsite from "../../assets/portfolio/rds.jpg";
import drPuerta from "../../assets/portfolio/drpuerta.jpg";
import hotels from "../../assets/portfolio/hotels.jpg";
import forVegans from "../../assets/portfolio/forvegans.jpg";
import punkies from "../../assets/portfolio/punkies2.jpg";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { useHistory } from "react-router-dom";
export default function Portfolio() {
  let history = useHistory();
  return (
    <>
      {/* <div className="portfolio-page-hero">
                <img src={portfolioImg} alt="services" />
            </div> */}
      <div className="portfolio-main-title">
        <Title message={"Portafolio"} title={""} />
      </div>
      <br />
      <div className="portfolio-billboard">
        <div className="portfolio-billboard-child-one">
          <div>
            <h1>Punkies y Cerebro</h1>
            <h2>
              Página en NextJS, Heroku, Strapi y MongoDB. Diseño original y
              responsive. Licencia de imagenes.
            </h2>
            <div className="buttons">
              <div className="button-one">
                <Button
                  label="Ver Sitio"
                  category="primary"
                  size="sm"
                  icon={WorkOutlineIcon}
                  onClick={() =>
                    window.open("https://punkiesycerebro.com", "_blank")
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-billboard-child-two">
          <img src={punkies} alt="" />
        </div>
      </div>
      <div className="portfolio-billboard-two">
        <div className="portfolio-billboard-two-child-one">
          <img src={drPuerta} alt="" />
        </div>
        <div className="portfolio-billboard-two-child-two">
          <div>
            <h1>Dr. Puerta</h1>
            <h2>
              Landing page en NextJs. Diseño original y responsive. Licencia
              Premium de imagenes (uso ilimitado sin atribución)
            </h2>
            <div className="buttons">
              <div className="button-one">
                <Button
                  label="Ver Sitio"
                  category="primary"
                  size="sm"
                  icon={WorkOutlineIcon}
                  onClick={() => window.open("https://drpuerta.com", "_blank")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-billboard">
        <div className="portfolio-billboard-child-one">
          <div>
            <h1>Experiencia Japonesa</h1>
            <h2>
              Study case: Página en HTML, CSS, JavaScript vanilla. Diseño
              original y responsive. Licencia Premium de imagenes (uso ilimitado
              sin atribución)
            </h2>
            <div className="buttons">
              <div className="button-one">
                <Button
                  label="Ver Sitio"
                  category="primary"
                  size="sm"
                  icon={WorkOutlineIcon}
                  onClick={() =>
                    window.open(
                      "https://gentle-bonbon-985a86.netlify.app/",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-billboard-child-two">
          <img src={portfolioRestaurant} alt="" />
        </div>
      </div>
      <div className="portfolio-billboard-two">
        <div className="portfolio-billboard-two-child-one">
          <img src={iphoneCase} alt="" />
        </div>
        <div className="portfolio-billboard-two-child-two">
          <div>
            <h1>iPhone 13</h1>
            <h2>
              Study case: Página en HTML, CSS, JavaScript vanilla. Diseño
              original y responsive. Licencia Premium de imagenes (uso ilimitado
              sin atribución)
            </h2>
            <div className="buttons">
              <div className="button-one">
                <Button
                  label="Ver Sitio"
                  category="primary"
                  size="sm"
                  icon={WorkOutlineIcon}
                  onClick={() =>
                    window.open(
                      "https://https://capable-creponne-253cb7.netlify.app/.com",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-billboard">
        <div className="portfolio-billboard-child-one">
          <div>
            <h1>Hotels.com</h1>
            <h2>
              Study case: Página en HTML, CSS, JavaScript vanilla. Diseño
              original y responsive. Licencia Premium de imagenes (uso ilimitado
              sin atribución)
            </h2>
            <div className="buttons">
              <div className="button-one">
                <Button
                  label="Ver Sitio"
                  category="primary"
                  size="sm"
                  icon={WorkOutlineIcon}
                  onClick={() =>
                    window.open(
                      "https://hoteles-react.netlify.app/Rooms",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-billboard-child-two">
          <img src={hotels} alt="" />
        </div>
      </div>
    </>
  );
}

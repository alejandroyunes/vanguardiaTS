import React from "react";
import "./Portfolio.scss";
import portfolioRestaurant from '../../assets/portfolio/portfolio-restaurant.jpg'
import iphoneCase from '../../assets/portfolio/iphone-case.jpg'
import studioWebsite from '../../assets/portfolio/website-one-two.jpg'
import rdsWebsite from '../../assets/portfolio/rds.jpg'
import drPuerta from '../../assets/portfolio/drpuerta.jpg'
import forVegans from '../../assets/portfolio/forvegans.jpg'

import Title from "../../components/Title/Title";


import Button from "../../components/Button/Button";
import Animation from "../../assets/development.png";
import portfolioImg from '../../assets/portfolio/portfolio-hero-desktop-two.jpg'

import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
export default function Portfolio() {
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
                        <h1>Experiencia Japonesa</h1>
                        <h2>
                            Study case: Página en HTML, CSS, JavaScript vanilla. Diseño original y responsive.  Licencia Premium de imagenes (uso ilimitado sin atribución)
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="Ver Sitio"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-billboard-child-two">
                    <img src={portfolioRestaurant} />
                </div>
            </div>

            <div className="portfolio-billboard-two">

                <div className="portfolio-billboard-two-child-one">
                    <img src={iphoneCase} />
                </div>
                <div className="portfolio-billboard-two-child-two">
                    <div>
                        <h1>iPhone 12</h1>
                        <h2>
                        Study case: Página en HTML, CSS, JavaScript vanilla. Diseño original y responsive. Licencia Premium de imagenes (uso ilimitado sin atribución)
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="Ver Sitio"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-billboard">
                <div className="portfolio-billboard-child-one">
                    <div>
                        <h1>InfraRedes</h1>
                        <h2>
                        Study case: Página en HTML, CSS, JavaScript vanilla. Diseño original y responsive. Licencia Premium de imagenes (uso ilimitado sin atribución)
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="Ver Sitio"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-billboard-child-two">
                    <img src={rdsWebsite} />
                </div>
            </div>

            <div className="portfolio-billboard-two">

                <div className="portfolio-billboard-two-child-one">
                    <img src={drPuerta} />
                </div>
                <div className="portfolio-billboard-two-child-two">
                    <div>
                        <h1>Dr. Puerta</h1>
                        <h2>
                        Página en WordPress. Diseño original y responsive. Licencia Premium de imagenes (uso ilimitado sin atribución)
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="Ver Sitio"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-billboard">
                <div className="portfolio-billboard-child-one">
                    <div>
                        <h1>For Vegans</h1>
                        <h2>
                        Página en WordPress. Diseño original y responsive. Licencia Premium de imagenes (uso ilimitado sin atribución)
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="Ver Sitio"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-billboard-child-two">
                    <img src={forVegans} />
                </div>
            </div>


        </>
    );
}

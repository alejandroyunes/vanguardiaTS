import React from "react";
import "./Portfolio.scss";
import websiteOne from '../../assets/portfolio/website-one.jpg'
import websiteTwo from '../../assets/portfolio/website-two.jpg'
import studioWebsite from '../../assets/portfolio/studio-website.jpg'
import rdsWebsite from '../../assets/portfolio/rds.jpg'
import drPuerta from '../../assets/portfolio/drpuerta.jpg'

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
                        <h1>Hushina Restaurant</h1>
                        <h2>
                            Get rid of spam in your application. Use our API to access
                            Akismet’s powerful spam detection. Our developer program provides
                            valuable data and feedback during development.
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="view work"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-billboard-child-two">
                    <img src={websiteOne} />
                </div>
            </div>

            <div className="portfolio-billboard-two">

                <div className="portfolio-billboard-two-child-one">
                    <img src={websiteTwo} />
                </div>
                <div className="portfolio-billboard-two-child-two">
                    <div>
                        <h1>Vanguardia Digital Development</h1>
                        <h2>
                            Get rid of spam in your application. Use our API to access
                            Akismet’s powerful spam detection. Our developer program provides
                            valuable data and feedback during development.
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="view work"
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
                        <h1>Hushina Restaurant</h1>
                        <h2>
                            Get rid of spam in your application. Use our API to access
                            Akismet’s powerful spam detection. Our developer program provides
                            valuable data and feedback during development.
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="view work"
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
                        <h1>Vanguardia Digital Development</h1>
                        <h2>
                            Get rid of spam in your application. Use our API to access
                            Akismet’s powerful spam detection. Our developer program provides
                            valuable data and feedback during development.
                        </h2>
                        <div className="buttons">
                            <div className="button-one">
                                <Button
                                    label="view work"
                                    category="primary"
                                    size="sm"
                                    icon={WorkOutlineIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

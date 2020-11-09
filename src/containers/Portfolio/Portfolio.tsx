import React from "react";
import "./Portfolio.scss";
import websiteOne from '../../assets/portfolio/website-one.jpg'
import studioWebsite from '../../assets/portfolio/studio-website.jpg'

import Title from "../../components/Title/Title";


import Button from "../../components/Button/Button";
import Animation from "../../assets/development.png";

import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
export default function Portfolio() {
    return (
        <>
            <div className="portfolio-main-title">
                <Title message={"Portflio"} title={""} />
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

            <div className="portfolio-billboard">
                <div className="portfolio-billboard-child-two">
                    <img src={studioWebsite} />
                </div>
                <div className="portfolio-billboard-child-one">
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
                <div className="portfolio-billboard-child-two">
                    <img src={Animation} />
                </div>
            </div>


            <div className="portfolio-billboard">
                <div className="portfolio-billboard-child-two">
                    <img src={Animation} />
                </div>
                <div className="portfolio-billboard-child-one">
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

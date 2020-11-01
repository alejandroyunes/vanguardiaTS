import React from "react";
import "./BillboardTwo.scss";
import { isWebpSupported } from 'react-image-webp/dist/utils';
import Button from "../Button/Button";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ContactMailIcon from "@material-ui/icons/ContactMail";
export default function BillboardTwo() {
    return (
        <>
            <div className="secondary__billboard">
                <div className="child-one">
                    <div>
                        <h3>DIGITAL SERVICES</h3>
                        <h1>Selling Digital Services</h1>
                        <h2>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
                        </h2>
                        <ul>
                            <li>test1</li>
                            <li>test</li>
                        </ul>
                        <br />
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
                        </p>

                    </div>
                </div>

                <div className="child-two">
                    <a href="https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s" className="btn-video" data-fancybox="">
                        {isWebpSupported() ? <img src={require('../../assets/billboard-two.webp')} /> : <img src={require('../../assets/portfolio/website-one.jpg')} />}
                    </a>
                </div>
            </div>
        </>
    );
}

import React, {FC, useEffect} from "react";
import "./Footer.scss";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

import Animation from './Animation'
import $ from "jquery";
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from './worldLowRes.json'

export default function Footer() {
  return (
    <>

      <div className=" footer">
        <div className="section__grid footer__grid">

          <div className="boxf1">

            <div>
              <h1>
                Our Office</h1>
              <h2>
                Leading digital agency with solid design.
                </h2>

              <div className="footer__button">
                <input type="submit" value="Medellín" />
                <input type="submit" value="Colombia" />
              </div>
              
            
                
              

              <div className="footer__icon">
                <LocationOnIcon />
                <p>
                  2231 seymour, Futurama, WI 58304
                </p>
              </div>
              <div className="footer__icon">
                <MailOutlineIcon /> <p>Alejandro@website.com</p>
              </div>
              <div className="footer__icon">
                <PhoneAndroidIcon /> <p>304 669 5598</p>
              </div>
              <div className="footer__social">
              
                <InstagramIcon  fontSize="large"/> 
                <FacebookIcon fontSize="large" />
                <TwitterIcon  fontSize="large"/> 
                <GitHubIcon  fontSize="large"/> 
              </div>

              

            </div>

          </div>

          <div className="boxf2">
          <div className="map">
          <VectorMap {...worldLowRes} />
          </div>
         
          </div>



        </div>
      </div>







    </>
  );
}

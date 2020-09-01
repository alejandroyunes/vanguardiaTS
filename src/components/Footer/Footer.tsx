import React, { FC, useEffect, useState } from "react";
import "./Footer.scss";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';




const Footer: FC = ({

}) => {

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
                  2231 seymour, Futurama, WI 5304
                </p>
              </div>
              <div className="footer__icon">
                <MailOutlineIcon /> <p>Alejandro@website.com</p>
              </div>
              <div className="footer__icon">
                <PhoneAndroidIcon /> <p>304 669 5598</p>
              </div>
              <div className="footer__social">
                <InstagramIcon fontSize="large" />
                <FacebookIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <GitHubIcon fontSize="large" />
              </div>
            </div>

          </div>
          <div className="boxf2">
            <div className="contact__form__container">
            <form>
              <input name="name" type="text" className="feedback-input" placeholder="Name" />
              <input name="email" type="text" className="feedback-input" placeholder="Email" />
              <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer
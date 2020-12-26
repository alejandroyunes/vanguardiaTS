import React, { FC, useEffect, useState } from "react";
import "./Footer.scss";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import axios from "axios";
import { getJSON } from "jquery";
import WeatherIcons from './WeatherIcons/WeatherIcons'


const Footer: FC = () => {

  const key = '3a306e66fcf53df61a19eb62070a3d84';
  const [feels_like, setFeelsLike] = useState('');
  const [mainTemp, setMainTemp] = useState('');
  const [description, setDescription] = useState('');
  const [main, setMain] = useState('');
  const [iconID, setIconID] = useState('');

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Medellín,co&APPID=' + key + '&units=metric')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);

      })
  }, [])


  return (
    <>
      <div className="footer ">
        <div className="section__grid footer__grid">
          <div className="footer-child-one">
            <h1>Nuestra Oficina</h1>
            <h2>Agencia digital líder con sólida experiencia en diseño y desarrollo.</h2>
            <div className="climate-data">
              <div className="climate-data-one">
                <h3>El clima en Medellín:</h3>
              </div>
              <div className="climate-data-two">
                <span>{description ? <p>{<WeatherIcons />}</p> : <p>2</p>}</span>
              </div>
            </div>

            <div className="footer__icon">
              <MailOutlineIcon /> <p>Alejandro@website.com</p>
            </div>
            <div className="footer__icon">
              <PhoneAndroidIcon /> <p>304 669 5598</p>
            </div>
            <div className="footer__icon">
              <LocationOnIcon />
              <p>2231 seymour, Futurama, WI 5304</p>
            </div>
            <div className="footer__social">
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
              <GitHubIcon fontSize="large" />
            </div>
          </div>
          <div className="footer-child-two">
            <form>
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder="Nombre"
              />
              <input
                name="email"
                type="text"
                className="feedback-input"
                placeholder="Email"
              />
              <textarea
                name="text"
                className="feedback-input"
                placeholder="Comentario"
              ></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

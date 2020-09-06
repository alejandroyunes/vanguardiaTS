import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { toggleDarkMode } from "../../store/actions/app";
import { AppStore } from "../../store/appStore";

function Header() {
  const [header, setHeader] = useState("header__main");

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      console.log("less than 70");
      return setHeader("header__main");
    } else if (window.scrollY >= 70) {
      return setHeader("header__slide__down");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <div className="header">
      <header className={header}>
        <div className="header__logo">
          <img src={logo} />
        </div>

        <div className="header__toggle__dark_mode_container">
          <div className="dark-toggle-input">
            <input
              type="checkbox"
              defaultChecked={isDarkMode}
              className="chk"
              id="chk"
              onChange={() => dispatch(toggleDarkMode())}
            />
            <label htmlFor="chk" className="toggle">
              <span className="star star1"></span>
              <span className="star star2"></span>
              <span className="star star3"></span>
              <span className="star star4"></span>
              <span className="star star5"></span>
              <span className="star star6"></span>
              <span className="handler">
                <span className="crater crater1"></span>
                <span className="crater crater2"></span>
                <span className="crater crater3"></span>
              </span>
            </label>
          </div>
        </div>

        <ul className="header__links">
          <li className="header__link__item">home</li>
          <li className="header__link__item">about</li>
          <li className="header__link__item">blog</li>
          <li className="header__link__item">contact</li>
        </ul>

        <div className="hamburger-menu-mobile">
          <div id="toggleMenu">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Portfolio</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>

       
      </header>
    </div>
  );
}

export default Header;

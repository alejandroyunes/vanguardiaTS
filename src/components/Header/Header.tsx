import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { toggleDarkMode } from "../../store/actions/app";
import { AppStore } from "../../store/appStore";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
function Header() {
  const [header, setHeader] = useState("header__main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home-nav");

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      setIsMenuOpen(false);
      return setHeader("header__main");
    } else if (window.scrollY >= 70) {
      setIsMenuOpen(false);
      return setHeader("header__slide__down");
    }
  };

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        return setActiveMenu("home-nav");
      case "/about":
        return setActiveMenu("about-nav");
      case "/services":
        return setActiveMenu("services-nav");
      case "/blog":
        return setActiveMenu("blog-nav");
    }
  });

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <Link to={{ pathname: "/" }}>
            <li
              id="home-nav"
              onClick={() => {
                setActiveMenu("home-nav");
              }}
              className={
                activeMenu == "home-nav"
                  ? "header__link__item active"
                  : "header__link__item"
              }
            >
              Home
            </li>
          </Link>

          <Link to={{ pathname: "/about" }}>
            <li
              id="about-nav"
              onClick={() => {
                setActiveMenu("about-nav");
              }}
              className={
                activeMenu == "about-nav"
                  ? "header__link__item active"
                  : "header__link__item"
              }
            >
              About
            </li>
          </Link>
          <Link to={{ pathname: "/services" }}>
            <li
              id="services-nav"
              onClick={() => {
                setActiveMenu("services-nav");
              }}
              className={
                activeMenu == "services-nav"
                  ? "header__link__item active"
                  : "header__link__item"
              }
            >
              Services
            </li>
          </Link>

          <Link to={{ pathname: "/blog" }}>
            <li
              id="blog-nav"
              onClick={() => {
                setActiveMenu("blog-nav");
              }}
              className={
                activeMenu == "blog-nav"
                  ? "header__link__item active"
                  : "header__link__item"
              }
            >
              Blog
            </li>
          </Link>

          <Link to={{ pathname: "/contact" }}>
            <li
              id="contact-nav"
              onClick={() => {
                setActiveMenu("contact-nav");
              }}
              className={
                activeMenu == "contact-nav"
                  ? "header__link__item active"
                  : "header__link__item"
              }
            >
              Contact
            </li>
          </Link>
        </ul>    
        <div className={"hamburger-menu-mobile"}>
          <div id="toggleMenu" onBlur={() => setIsMenuOpen(false)}>
            <input
              type="checkbox"
              // defaultChecked={isMenuOpen}
              checked={isMenuOpen}
              onClick={() => toggleDropdown()}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link to={{ pathname: "/" }}>
                <li>Home</li>
              </Link>
              <Link to={{ pathname: "/about" }}>
                <li>About</li>
              </Link>
              <Link to={{ pathname: "/services" }}>
                <li>Services</li>
              </Link>

              <li>Portfolio</li>

              <li>Contact</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

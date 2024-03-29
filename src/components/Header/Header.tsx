import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { toggleDarkMode } from "../../store/actions/app";
import { AppStore } from "../../store/appStore";
import { Link, useLocation } from "react-router-dom";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import logo from "../../assets/logo.svg";

function Header() {
  const [header, setHeader] = useState("header__main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home-nav");
  const [showScroll, setShowScroll] = useState(false);

  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);
  const dispatch = useDispatch();
  const location = useLocation();

  const listenScrollEvent = () => {
    if (window.scrollY <= 70) {
      setIsMenuOpen(false);
      setHeader("header__main");
    } else if (window.scrollY >= 70) {
      setIsMenuOpen(false);
      setHeader("header__slide__down");
    }

    if (window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (window.pageYOffset <= 800) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: 3000, behavior: "smooth" });
  };

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
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
      case "/contact":
        return setActiveMenu("contact-nav");
      case "/portfolio":
        return setActiveMenu("portfolio-nav");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="header">
        <header className={header}>
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>

          <div className="header__links-wrapper">
            <div className="hamburger-menu-mobile">
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
                    <li>Inicio</li>
                  </Link>
                  <Link to={{ pathname: "/about" }}>
                    <li>Sobre Mi</li>
                  </Link>
                  <Link to={{ pathname: "/services" }}>
                    <li>Servicios</li>
                  </Link>
                  <Link to={{ pathname: "/blog" }}>
                    <li>Blog</li>
                  </Link>
                  <Link to={{ pathname: "/portfolio" }}>
                    <li>Portafolio</li>
                  </Link>
                  <Link to={{ pathname: "/contact" }}>
                    <li>Contacto</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="header__toggle__dark_mode_container">
              <div className="dark-toggle-input">
                <input
                  type="checkbox"
                  defaultChecked={!isDarkMode}
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
            <ul>
              <Link to={{ pathname: "/" }}>
                <li
                  id="home-nav"
                  onClick={() => {
                    setActiveMenu("home-nav");
                  }}
                  className={
                    activeMenu === "home-nav"
                      ? "header__link__item active"
                      : "header__link__item"
                  }
                >
                  Inicio
                </li>
              </Link>

              <Link to={{ pathname: "/about" }}>
                <li
                  id="about-nav"
                  onClick={() => {
                    setActiveMenu("about-nav");
                  }}
                  className={
                    activeMenu === "about-nav"
                      ? "header__link__item active"
                      : "header__link__item"
                  }
                >
                  Sobre Mi
                </li>
              </Link>
              <Link to={{ pathname: "/services" }}>
                <li
                  id="services-nav"
                  onClick={() => {
                    setActiveMenu("services-nav");
                  }}
                  className={
                    activeMenu === "services-nav"
                      ? "header__link__item active"
                      : "header__link__item"
                  }
                >
                  Servicios
                </li>
              </Link>

              <Link to={{ pathname: "/portfolio" }}>
                <li
                  id="portfolio-nav"
                  onClick={() => {
                    setActiveMenu("portfolio-nav");
                  }}
                  className={
                    activeMenu === "portfolio-nav"
                      ? "header__link__item active"
                      : "header__link__item"
                  }
                >
                  Portafolio
                </li>
              </Link>
              <Link to={{ pathname: "/blog" }}>
                <li
                  id="blog-nav"
                  onClick={() => {
                    setActiveMenu("blog-nav");
                  }}
                  className={
                    activeMenu === "blog-nav"
                      ? "header__link__item active"
                      : "header__link__item"
                  }
                >
                  Blog
                </li>
              </Link>

              <li
                id="contact-nav"
                onClick={() => {
                  scrollBottom();
                }}
                className={
                  activeMenu === "contact-nav"
                    ? "header__link__item active"
                    : "header__link__item"
                }
              >
                Contacto
              </li>
            </ul>
          </div>
        </header>
      </div>

      <div className="arrow-wrapper">
        <div
          className="arrow-circle"
          style={{ display: showScroll ? "flex" : "none" }}
          onClick={scrollTop}
        >
          <ArrowUpwardIcon className="scrollTop-arrow" />
        </div>
      </div>
    </>
  );
}

export default Header;

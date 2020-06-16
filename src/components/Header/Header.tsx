import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.svg';
import './Header.scss'

function Header() {
  const [header, setHeader] = useState("header__main");

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      return setHeader("header__main");
    } else if (window.scrollY > 70) {
      return setHeader("header__slide__down");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
   
        <div className="header">
        <header className={header}>
          <div className="header__logo">
              <img src={logo} />
              
            </div>
            
            <ul className="header__links">
              <li className="header__link__item">home</li>
              <li className="header__link__item">about</li>
              <li className="header__link__item">blog</li>
              <li className="header__link__item">contact</li>
            </ul>

            
        </header>
        </div>
      
  );
}

export default Header;

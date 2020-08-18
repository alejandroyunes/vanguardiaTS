import React, { useState } from "react";
import ResponsiveDesignIcon from "./Assets/responsive-design-icon.svg";
import MobileDesignIcon from "./Assets/mobile-design-icon.svg";
import RocketAnimation from "./rocketAnimation";
import './Cards.scss'
import Title from '../Title/Title'
import Card from '../Card/Card'
import classNames from 'classnames'

export default function Cards() {

  const [ currentCard, setCard ] = useState(2);

  const changeLeft = ( ) => {
    if (currentCard == 3){
      setCard(currentCard - 1)
    }
    if (currentCard == 2){
      setCard(currentCard - 1)
    }

  }

  const changeRight = ( ) => {

  if (currentCard == 1){
    setCard(currentCard + 1)
  }
  if (currentCard == 2){
    setCard(currentCard + 1)
  }
  }


  return (
    <>
      <Title
        title="Latest Technologies"
        message="Mobile first world"
      />
      <div className="cards__container section__grid">
        <div className={
            classNames('card__child__one',
                     {'card__child__active ' : currentCard == 1}, 
                     
                     )}>
          <Card
            image={ResponsiveDesignIcon}
            title="Responsive first"
            subtitle="Illustration Galleryzzz"
            message="Leading1 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
        </div>
        <div className={
          classNames('card__child__two', 
          {'card__child__active ' : currentCard == 2},
          {'card__child__one ' : currentCard == 1} )}>
          <Card
            image={MobileDesignIcon}
            title="Responsive Middle"
            subtitle="Illustration Gallery"
            message="Leading2 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
        </div>
        <div className={
          classNames('card__child__three', 
          {'card__child__active ' : currentCard == 3} )}>
          <Card
            image={MobileDesignIcon}
            title="SEO & Last"
            subtitle="Illustration last"
            message="Leading3 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
        </div>
      </div>
      <div className="button__div">


        <button className="arrow left" onClick={changeLeft}>
          <svg width="40px" height="60px" viewBox="0 0 50 80">
            <polyline 
            fill="none" 
            stroke="#AE3C43" 
            stroke-width="1" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
          </svg>
        </button>
        
        
        <div className="right__arrow_div">
        <button className="arrow right" onClick={changeRight}>
          <svg width="40px" height="60px" viewBox="0 0 50 80" >
            <polyline 
            fill="none" 
            stroke="#AE3C43" 
            stroke-width="1" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
          </svg>
        </button>
        </div>

      </div>

    </>
  );
}

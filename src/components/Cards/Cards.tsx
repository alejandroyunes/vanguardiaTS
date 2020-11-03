import React, { useState } from "react";
import ResponsiveDesignIcon from "./Assets/responsive-design-icon.svg";
import MobileDesignIcon from "./Assets/mobile-design-icon.svg";
import Rocket from "./Assets/rocket.svg";
import './Cards.scss'
import Title from '../Title/Title'
import Card from '../Card/Card'
import classNames from 'classnames'


export default function Cards() {

  const [currentCard, setCard] = useState(2);
  const [fromLeftToRight, setfromLeftToRight] = useState(false);
  const [fromRightToLeft, setfromRightToLeft] = useState(false);
  const [defaultValue, setDefaultValue] = useState(true);

  const changeLeft = () => {

    if (currentCard == 3) {
      setfromRightToLeft(false)
      setfromLeftToRight(true)
      setDefaultValue(false)
      setCard(currentCard - 1)
    }
    if (currentCard == 2) {
      setDefaultValue(false)
      setCard(currentCard - 1)
    }
  }


  const changeRight = () => {

    if (currentCard == 1) {
      setfromRightToLeft(true)
      setfromLeftToRight(false)
      setDefaultValue(false)
      setCard(currentCard + 1)
    } else {
      setDefaultValue(false)
    }
    if (currentCard == 2) {
      setCard(currentCard + 1)
    } else {
      setDefaultValue(false)
    }
  }
  return (
    <>
      <div className="cards__container section__grid">

        <div className={
          classNames('card__child__hide',
            { 'card__child__active animated bounceInLeft': currentCard == 1 },
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

        {(fromRightToLeft) && (
          <div
            className={
              classNames('card__child__hide',
                { 'card__child__active animated bounceInRight': currentCard == 2 },
              )}>
            <Card
              image={MobileDesignIcon}
              title="Responsive Middle"
              subtitle="Illustration Gallery"
              message="Leading2 digital agency with solid design and development
  expertise. We build mobile and web products for startups and
  design intricate trading platforms."
            />
          </div>
        )}


        {(fromLeftToRight) && (

          <div
            className={
              classNames('card__child__hide',
                { 'card__child__active animated bounceInLeft': currentCard == 2 },
              )}>
            <Card
              image={MobileDesignIcon}
              title="Responsive Middle"
              subtitle="Illustration Gallery"
              message="Leading2 digital agency with solid design and development
  expertise. We build mobile and web products for startups and
  design intricate trading platforms."
            />
          </div>
        )}

        {(defaultValue) && (

          <div className={
            classNames('card__child__hide',
              { 'card__child__active ': currentCard == 2 },
            )}>
            <Card
              image={MobileDesignIcon}
              title="Responsive Middle"
              subtitle="Illustration Gallery"
              message="Leading2 digital agency with solid design and development
  expertise. We build mobile and web products for startups and
  design intricate trading platforms."
            />
          </div>

        )}
        <div className={
          classNames('card__child__hide',
            { 'card__child__active animated bounceInRight': currentCard == 3 })}>
          <Card
            image={Rocket}
            title="SEO & Last"
            subtitle="Illustration last"
            message="Leading3 digital agency with solid design and development
          expertise. We build mobile and web products for startups and
          design intricate trading platforms."
          />
        </div>
      </div>

      <div className="button__div">
        <button
          className={
            classNames('arrow left',
              { 'arrow-active polyline': currentCard == 2 },
              { 'arrow-active polyline ': currentCard == 3 }
            )}
          onClick={changeLeft}>
          <svg width="40px" height="60px" viewBox="0 0 50 80">
            <polyline
              fill="none"
              stroke="#AE3C43"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="45.63,75.8 0.375,38.087 45.63,0.375 " />
          </svg>
        </button>

        <div className="right__arrow_div">
          <button className={
            classNames('arrow right',
              { 'arrow-active polyline': currentCard == 2 },
              { 'arrow-active polyline ': currentCard == 1 })}

            onClick={changeRight}>
            <svg width="40px" height="60px" viewBox="0 0 50 80" >
              <polyline
                fill="none"
                stroke="#AE3C43"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="0.375,0.375 45.63,38.087 0.375,75.8 " />
            </svg>
          </button>
        </div>


      </div>
      <div className='dots-container'>
        <div className={
          classNames('dot',
            { ' dot current': currentCard == 1 })}></div>
        <div className={
          classNames('dot',
            { ' dot current': currentCard == 2 })}></div>
        <div className={
          classNames('dot',
            { ' dot current': currentCard == 3 })}></div>
      </div>
    </>
  );
}


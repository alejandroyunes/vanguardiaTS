import React from "react";

import WhiteMountains from "./Assets/white-mountains.jpg";
import GreenDesign from "./Assets/green-design-mockup.jpg";
import CellphoneColorful from "./Assets/cellphones.colorful.jpg";
import OneHandHoldingCellphone from "./Assets/one-hand-holding-cellphonee.jpg";

import HandsHoldingTablet from "./Assets//hands-holding-tablet.jpg";
import './ImageGallery.scss'
import Title from '../Title/Title'

export const ImageGallery = () => {
  return (
    <>
     <Title
        title="Portfolio"
        message="Creative Interface Design"
        />

      <div className="design__section section__full" >
       
        <div className="grid__image__gallery">
          <div className="box11">
            <img src={HandsHoldingTablet} />
          </div>
          <div className="box22">
            <img src={OneHandHoldingCellphone} />
          </div>
          <div className="box33">
            <img src={WhiteMountains} />
          </div>
          <div className="box44">
            <img src={GreenDesign} />
          </div>
          <div className="box55">
            <img src={CellphoneColorful} />
          </div>
        </div>

      </div>
    </>
  );
};

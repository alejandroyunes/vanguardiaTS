import React from "react";

import WhiteMountains from "./Assets/white-mountains.jpg";
import GreenDesign from "./Assets/green-design-mockup.jpg";
import CellphoneColorful from "./Assets/cellphones.colorful.jpg";
import OneHandHoldingCellphone from "./Assets/one-hand-holding-cellphonee.jpg";
import HandsHoldingTablet from "./Assets//hands-holding-tablet.jpg";
import './ImageGallery.scss'

export const ImageGallery = () => {
  return (
    <>
      <div className=" section__full" >
        <div className="grid__image-gallery">
          <div className="image-gallery-box-one">
            <img src={HandsHoldingTablet} />
          </div>
          <div className="image-gallery-box-two">
            <img src={OneHandHoldingCellphone} />
          </div>
          <div className="image-gallery-box-three">
            <img src={WhiteMountains} />
          </div>
          <div className="image-gallery-box-four">
            <img src={GreenDesign} />
          </div>
          <div className="image-gallery-box-five">
            <img src={CellphoneColorful} />
          </div>
        </div>

      </div>
    </>
  );
};

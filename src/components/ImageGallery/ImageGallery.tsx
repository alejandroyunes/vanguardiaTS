import React from "react";

import WhiteMountains from "./Assets/white-mountains.jpg";
import GreenDesign from "./Assets/green-design-mockup.jpg";
import CellphoneColorful from "./Assets/cellphones.colorful.jpg";
import PenTool from "./Assets/pentool.jpg";
import Rocket from './Assets/Rocket'
import GirlFloating from './Assets/GirlFloating/GirlFloating'
import MiniVan from "./Assets/minivan-design.jpg";
import './ImageGallery.scss'



export const ImageGallery = () => {

//   var img = document.getElementsByClassName('image-gallery-box-one'); 

// var width = img.clientWidth;
// var height = img.clientHeight;

  return (
    <>
      <div className=" section__full" >
        <div className="grid__image-gallery">
          <div className="image-gallery-box-one">
            <img src={MiniVan} />
          </div>
          <div className="image-gallery-box-two">
            <Rocket/>
          </div>
          <div className="image-gallery-box-three">
            <img src={WhiteMountains} />
          </div>
          <div className="image-gallery-box-four">
            <img src={GreenDesign} />
          </div>
          <div className="image-gallery-box-five">
            {/* <img src={CellphoneColorful} /> */}
            <GirlFloating/>
          </div>
        </div>

      </div>
    </>
  );
};

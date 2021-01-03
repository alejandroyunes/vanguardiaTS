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
            <div className="overlay-red">
              <div className="text-overlay">Diseño Receptivo</div>
            </div>
          </div>
          <div className="image-gallery-box-two">
            {/* <img src={PenTool} />  */}
            <Rocket/>
            <div className="overlay-red">
              <div className="text-overlay">Responsive Móvil</div>
            </div>
          </div>
          <div className="image-gallery-box-three">
            <img src={WhiteMountains} />
            <div className="overlay-red">
              <div className="text-overlay">Diseño Gráfico</div>
            </div>
          </div>
          <div className="image-gallery-box-four">
            <img src={GreenDesign} />
            <div className="overlay-red">
              <div className="text-overlay">Responsive Móvil</div>
            </div>
          </div>
          <div className="image-gallery-box-five">
            {/* <img src={CellphoneColorful} /> */}
            <GirlFloating/>
            <div className="overlay-red">
              <div className="text-overlay">Responsive Móvil</div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

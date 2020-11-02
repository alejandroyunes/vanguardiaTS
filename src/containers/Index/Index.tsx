import React from "react";
import Billboard from "../../components/Billboard/Billboard";
import BillboardTwo from "../../components/BillboardTwo/BillboardTwo";
import Cards from "../../components/Cards/Cards";
import TwoColumn from "../../components/TwoColumn/TwoColumn";
import {ImageGallery} from "../../components/ImageGallery/ImageGallery";

export default function Index() {
  return (
    <>
      <Billboard />
       <Cards /> 
       <BillboardTwo />
      <ImageGallery/>
      <TwoColumn />  
    </>
  );
}

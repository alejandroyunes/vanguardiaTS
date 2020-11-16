import React from "react";
import Billboard from "../../components/Billboard/Billboard";
import BillboardTwo from "../../components/BillboardTwo/BillboardTwo";
import Cards from "../../components/Cards/Cards";
import TwoColumn from "../../components/TwoColumn/TwoColumn";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import Title from '../../components/Title/Title'
import Carousel from "../../components/Carousel/Carousel";
export default function Index() {
  return (
    <>
      <Billboard />
      <Title title="Latest Technologies" message="Mobile first world" />
      <Cards />
      <BillboardTwo />
      <Title title="Portfolio" message="Creative Interface Design" />
      <ImageGallery />
      <Title title="Design" message="Modern tendency Interface Design" />
      <TwoColumn />

    
      <br/>
      <br/>
      <br/>
    </>
  );
}

import React from "react";
import Billboard from "../../components/Billboard/Billboard";
import BillboardTwo from "../../components/BillboardTwo/BillboardTwo";
import Cards from "../../components/Cards/Cards";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import Title from '../../components/Title/Title'
export default function Index() {
  return (
    <>
      <Billboard />
      <Title title="Últimas Tecnologías" message="La Era Móvil" />
      <Cards />
      <BillboardTwo />
      <Title title="Diseñado para todos los dispositivos" message="Diseños Creativos" />
      <ImageGallery />
      <br/>
      <br/>
      <br/>
    </>
  );
}

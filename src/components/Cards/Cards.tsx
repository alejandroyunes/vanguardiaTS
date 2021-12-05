import React from "react";
import ResponsiveDesignIcon from "./Assets/responsive-design-icon.svg";
import MobileDesignIcon from "./Assets/mobile-design-icon.svg";
import Rocket from "./Assets/rocket.svg";
import './Cards.scss'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'


export default function Cards() {

  return (
    <>
      <div className="cards-wrapper">
        <div className="cards__container section__grid">
        <Card
              image={ResponsiveDesignIcon}
              title="Diseño Simple y Efectivo"
              subtitle=""
              message="Impresiona a tus clientes con una app rápida, moderna, personalizada y a la vanguardia con el diseño gráfico."
              viewmore="ver más"
            />
           <Card
              image={MobileDesignIcon}
              title="Ajustabilidad"
              subtitle="Aplicaciones para móvil"
              message="En el mundo moderno hay más de 5.000 millones
               de usuarios únicos con dispositivos móviles, esto cubre
                el 67% de la población."
              viewmore="ver más"
            />
          <Card
              image={Rocket}
              title="Tiempo de Carga"
              subtitle="Velocidad para tus clientes"
              message="Contamos con los mejores servidores del mercado, así podemos ofrecerte velocidad en tus aplicaciones."
              viewmore="ver más"
            />
        </div>
      </div>
      <div className="cards-wrapper-mobile">
        <Carousel />
      </div>
    </>
  );
}


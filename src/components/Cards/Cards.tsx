import React from "react";
import ResponsiveDesignIcon from "./Assets/responsive-design-icon.svg";
import MobileDesignIcon from "./Assets/mobile-design-icon.svg";
import Rocket from "./Assets/rocket.svg";
import './Cards.scss'
import Title from '../Title/Title'
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
              message="Impresiona a tus clientes con un sitio web veloz, moderno, personalizado y a la vanguardia con el diseño gráfico."
              viewmore="Ver Más"
            />
           <Card
              image={MobileDesignIcon}
              title="Responsive Apps"
              subtitle="Aplicaciones para móvil"
              message="En el mundo moderno hay más de 5.000 millones
               de usuarios únicos con dispositivos móviles, esto cubre
                el 67% de la población."
              viewmore="Ver Más"
            />
          <Card
              image={Rocket}
              title="Tiempo de Carga"
              subtitle="Velocidad para tus clientes"
              message="No dejes escapar a tus clientes por tener un sitio web lento, confia en los mejores servidores de alta velocidad en el mercado."
              viewmore="Ver Más"
            />
        </div>
      </div>
      <div className="cards-wrapper-mobile">
        <Carousel />
      </div>
    </>
  );
}


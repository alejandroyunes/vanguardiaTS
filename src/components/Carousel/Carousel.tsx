
import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.scss'
import Card from '../Card/Card'
import ResponsiveDesignIcon from "../../assets/cards/responsive-design-icon.svg";
import MobileDesignIcon from "../../assets/cards/mobile-design-icon.svg";
import Rocket from "../../assets/cards/rocket.svg";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      lazyLoad: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Card
              image={ResponsiveDesignIcon}
              title="Diseño Simple y Efectivo"
              subtitle=""
              message="Impresiona a tus clientes con un sitio web veloz, moderno, personalizado y a la vanguardia con el diseño gráfico."
              viewmore="Ver Más"
            />
          </div>
          <div>
            <Card
              image={MobileDesignIcon}
              title="Responsive Apps"
              subtitle="Aplicaciones para móvil"
              message="En el mundo moderno hay más de 5.000 millones
               de usuarios únicos con dispositivos móviles, esto cubre
                el 67% de la población."
              viewmore="Ver Más"
            />
          </div>
          <div >
            <Card
              image={Rocket}
              title="Tiempo de Carga"
              subtitle="Velocidad para tus usuarios"
              message="No dejes escapar a tus clientes por tener un sitio web lento, confia en los mejores servidores de alta velocidad en el mercado."
              viewmore="Ver Más"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
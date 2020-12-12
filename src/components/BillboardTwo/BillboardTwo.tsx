import React from "react";
import "./BillboardTwo.scss";
import { isWebpSupported } from 'react-image-webp/dist/utils';

export default function BillboardTwo() {
    return (
        <>
            <div className="digital-services-billboard">
                <div className="digital-services-child-one">
                    <div>
                        <h3>SOLUCIONES EN LÍNEA</h3>
                        <h1>¿Necesitas un Sitio Web?</h1>
                        <h2>
                        Podemos ayudarte a conseguir un dominio que se ajuste a tu negocio, el alojamiento y un diseño web profesional de calidad.
                        </h2>
                        <ul>
                            <li>Dominio</li>
                            <li>Hosting</li>
                            <li>Diseño Web</li>
                        </ul>
                        <h2>
                        Todo lo que necesitas para impulsar tu negocio en el Internet y generar más ingresos.
                        </h2>
                    </div>
                </div>

                <div className="digital-services-child-two">
                    <a href="https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s" className="btn-video" data-fancybox="">
                        {isWebpSupported() ? <img src={require('../../assets/billboard-two.webp')} /> : <img src={require('../../assets/portfolio/website-one.jpg')} />}
                   
                    <span className="wrap-icon-play">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#AE3C43" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                        </svg>
                    </span>
                    </a>
                </div>
            </div>
        </>
    );
}

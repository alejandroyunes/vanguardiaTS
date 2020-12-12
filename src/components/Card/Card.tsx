import React, { FC } from 'react';
import './Card.scss'

interface CardProps {
  title?: string
  subtitle?: string
  message?: string
  image?: string
  viewmore?: string

}

const Card: FC<CardProps> = ({
  title,
  message,
  subtitle,
  image,
  viewmore
}) => {


  return (
    <>
      <div className="card__container">
        <div className="card__container__img">
          <img src={image} />
        </div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {message}
        </p>
        <h6>{viewmore}</h6>

      </div>
    </>
  )
}
export default Card


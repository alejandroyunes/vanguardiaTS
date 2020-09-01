
import React, { FC, ReactNode } from 'react';
import './OneColumnImageCard.scss'


interface ImageColumnProps {
  image?: string
  title?: string
  message?: string
}

const OneColumnImageCard: FC<ImageColumnProps> = ({
  title,
  message,
  image
}) => {

  return (
    <div className="image__column">
      <div className="image__column-img">
        <img src={image} />
      </div>
      <div className="grid__title">
        <h3>{title}</h3>
      </div>

      <div className="grid__paragraph">
        <p>
          {message}
        </p>
      </div>
    </div>
  )
}
export default OneColumnImageCard


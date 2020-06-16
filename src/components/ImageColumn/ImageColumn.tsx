
import React, { FC, ReactNode } from 'react';
import './ImageColumn.scss'

interface ImageColumnProps {
  image?: string
  title?: string
  message?: string
}

const ImageColumn: FC<ImageColumnProps> = ({
  title,
  message,
}) => {

  return (
    <div className="image__column">
      <div className="image__column-img">
        <img src="https://picsum.photos/500/300?random=2" />
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
export default ImageColumn



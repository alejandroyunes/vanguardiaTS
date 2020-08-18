import React, { FC, ReactNode } from 'react';
import './Title.scss'

interface TitleProps {
  title: string
  message: string

}

const Title: FC<TitleProps> = ({
  title,
  message,


}) => {

  return (
    <div className="title__section">
      <div className="title__section__title">
        <h6>{title}</h6>
      </div>
      <div className="title__section__subtitle">
        <h6>{message}</h6>
      </div>
      <div className="title__section__line">
        <h6>---</h6>
      </div>
    </div>
  )
}
export default Title
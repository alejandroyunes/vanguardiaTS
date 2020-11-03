import React, { FC } from 'react';
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
      <h3>{title}</h3>
      <h2>{message}</h2>
    </div>
  )
}
export default Title
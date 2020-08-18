import React, { FC, ComponentType } from 'react'
import cn from 'classnames'

import './Button.scss'

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
  category?: 'primary' | 'border' | 'warning'
  size?: 'lg' | 'md' | 'sm'
  icon?: ComponentType<any> 
  autofocus?: boolean
} 

const Button: FC<ButtonProps> = ({
  type,
  label,
  category,
  onClick,
  disabled,
  size,
  icon: Icon,
  autofocus
}) => (
    <button
      type={type}
      className={cn('btn', `btn-${category}`, {
        'btn-puffy': size === 'lg',
        'btn-default': size === 'md',
        'btn-small': size === 'sm',
      })}
      disabled={disabled}
      onClick={onClick}
      autoFocus={!!autofocus}
    >
      <div className="btn__wrapper">
        <div className="btn__label">{label}</div>

        {Icon && (
          <div className="btn__icon_div">
            <span className="btn__icon">
              <Icon />
            </span>
          </div>
        )}
      </div>
    </button>
  )

Button.defaultProps = {
  type: 'button',
  size: 'md',
  category: 'primary',
  disabled: false,
  onClick: () => null,
}

export default Button

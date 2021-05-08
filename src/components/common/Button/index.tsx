import React from 'react'
import classnames from 'classnames'
import styles from './button.module.scss'
import { TChildren } from '../../../types/utilsTypes'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  classNames?: string[]
  secondary?: boolean
  iconPlus?: boolean
  disabled?: boolean
  onClick?: (...args: any) => any
  children?: TChildren
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children,
  secondary,
  disabled,
  classNames = [],
  iconPlus,
  ...rest
}) => {
  const { button, button_icon_plus, button_secondary, button_primary, button_disabled } = styles
  return (
    <button
      type={type}
      className={`${classnames({
        [button]: true,
        [button_icon_plus]: iconPlus,
        [button_secondary]: secondary,
        [button_primary]: !secondary,
        [button_disabled]: disabled,
      })} ${classNames.join(' ')}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)

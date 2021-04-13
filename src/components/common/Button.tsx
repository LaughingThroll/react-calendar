import React, { ReactElement } from 'react'
import classnames from 'classnames'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  classNames?: string[]
  type?: 'button' | 'submit' | 'reset'
  iconPlus?: boolean
  onClick?: (...args: any) => any
  children?: string | ReactElement
  disabled?: boolean
}

const Button: React.FC<IButton> = ({
  type = 'button',
  children,
  secondary,
  disabled,
  classNames = [],
  iconPlus,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${classnames({
        button: true,
        'button--icon-plus': iconPlus,
        'button--secondary': secondary,
        'button--primary': !secondary,
        'button--disabled': disabled,
      })} ${classNames.join(' ')}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)

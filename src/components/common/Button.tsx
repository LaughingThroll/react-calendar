import React, { ReactElement } from "react"

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  classNames?: string[]
  type?: "button" | "submit" | "reset"
  iconPlus?: boolean
  onClick?: (...args: any) => any
  children?: string | ReactElement
  disabled?: boolean
}

const Button = ({ type = "button", children, secondary, disabled, classNames = [], iconPlus, ...rest }: IButton) => {
  return (
    <button
      type={type}
      className={`button ${iconPlus ? "button--icon-plus" : ""} ${
        secondary ? "button--secondary" : disabled ? "button--disabled" : "button--primary"
      } ${classNames.join(" ")}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

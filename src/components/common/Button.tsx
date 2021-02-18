import React, { ReactElement } from "react"

interface IButtonIcon {
  iconClasses?: string[]
  path: string
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  classNames?: string[]
  type?: "button" | "submit" | "reset"
  icon?: IButtonIcon
  onClick?: (...args: any) => any
  children?: string | ReactElement
  disabled?: boolean
}

const Button = ({ type = "button", children, secondary, disabled, classNames = [], icon, ...rest }: IButton) => {
  return (
    <button
      type={type}
      className={`button ${
        secondary ? "button--secondary" : disabled ? "button--disabled" : "button--primary"
      } ${classNames.join(" ")}`}
      {...rest}
    >
      {icon?.path ? (
        <span
          className={`button__icon ${icon.iconClasses ? icon.iconClasses.join(" ") : ""}`}
          style={{ backgroundImage: `url(${icon?.path})` }}
        />
      ) : (
        ""
      )}
      {children}
    </button>
  )
}

export default Button

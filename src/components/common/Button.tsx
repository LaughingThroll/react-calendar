import React, { ReactElement } from "react"

interface IButtonIcon {
  iconClasses?: string[]
  path: string
}

interface IButton {
  secondary?: boolean
  className?: string[]
  type?: "button" | "submit" | "reset"
  icon?: IButtonIcon
  onClick?: () => void
  children?: string | ReactElement
}

const Button = ({ secondary, className = [], type = "button", icon, onClick, children }: IButton) => {
  return (
    <button
      type={type}
      className={`button ${secondary ? "button--secondary" : "button--primary"} ${className.join(" ")}`}
      onClick={onClick}
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

import React from "react"
import { TChildren } from "../types/utilsTypes"

interface IFormDates {
  title?: string
  inner?: boolean
  children?: TChildren
}

const FormDates: React.FC<IFormDates> = ({ title, inner, children }) => {
  return (
    <>
      <div className="form-dates">
        <h5 className="form-dates__title">{title}</h5>
        {inner ? <div className="form-dates__inner"> {children}</div> : children}
      </div>
    </>
  )
}

export default FormDates

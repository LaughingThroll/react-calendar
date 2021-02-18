import React from "react"
import { TChildren } from "../types/utilsTypes"

interface IFormDates {
  title?: string
  isInner?: boolean
  children?: TChildren
}

const FormDates = ({ title, isInner, children }: IFormDates) => {
  return (
    <>
      <div className="form-dates">
        <h5 className="form-dates__title">{title}</h5>
        {isInner ? <div className="form-dates__inner"> {children}</div> : children}
      </div>
    </>
  )
}

export default FormDates

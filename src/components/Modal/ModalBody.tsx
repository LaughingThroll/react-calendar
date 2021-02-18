import React from "react"
import { TChildren } from "../../types/utilsTypes"

interface IModalBody {
  children?: TChildren
}

const ModalBody = ({ children }: IModalBody) => {
  return (
    <form className="modal-body">
      {children && !Array.isArray(children) ? (
        <div className="modal-body__item ">{children}</div>
      ) : Array.isArray(children) ? (
        children.map((child, i) => (
          <div key={i} className="modal-body__item">
            {child}
          </div>
        ))
      ) : (
        <></>
      )}
    </form>
  )
}

export default ModalBody

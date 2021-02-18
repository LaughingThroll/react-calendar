import React from "react"

interface IModalFooter {
  children?: JSX.Element | JSX.Element[]
}

const ModalFooter = ({ children }: IModalFooter) => {
  return <div className="modal-footer">{children}</div>
}

export default ModalFooter

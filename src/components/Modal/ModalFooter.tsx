import React from "react"

interface IModalFooter {
  children?: JSX.Element | JSX.Element[]
}

const ModalFooter: React.FC<IModalFooter> = ({ children }) => <div className="modal-footer">{children}</div>

export default ModalFooter

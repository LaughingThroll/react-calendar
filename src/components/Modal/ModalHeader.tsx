import React from "react"

interface IModalHeader {
  title?: string
  countDays?: number
}

const ModalHeader = ({ title, countDays = 0 }: IModalHeader) => {
  return (
    <div className="modal-header">
      <h4 className="modal-header__title">{title}</h4>
      <div className="modal-header__days">{countDays} Days</div>
    </div>
  )
}

export default ModalHeader

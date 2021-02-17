import React from "react"
import arrowDown from "../../assets/images/icons/arrow--down.svg"
// import { FormDates } from './common/index'

const ModalBody = () => {
  return (
    <form className="modal-body">
      <div className="modal-body__item form-dates">
        <h5 className="form-dates__title">Dates</h5>
        <div className="form-dates__inner">
          <label className="form-dates__label">
            From <input className="form-dates__input input-date" type="date" value="2021-02-17" />
          </label>
          <label className="form-dates__label">
            To <input className="form-dates__input input-date" type="date" value="2021-02-17" />{" "}
          </label>
        </div>
      </div>

      <div className="modal-body__item form-dates">
        <h5 className="form-dates__title">Vac Type</h5>
        <div className="select">
          <select className="form-dates__select select__main">
            <option className="select__option">Paid Day Off (PD)</option>
            <option className="select__option">Paid Day On (PD)</option>
          </select>
          <span className="select__arrow" style={{ backgroundImage: `url(${arrowDown})` }}></span>
        </div>
      </div>
    </form>
  )
}

export default ModalBody

import React, { Component } from "react"
import arrowDown from "../assets/images/icons/arrow--down.svg"

import { Button } from "./../components/common"
import FormDates from "./../components/FormDates"
import InputDate from "./../components/InputDate"

import { Select, Option } from "../components/Select/"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../components/Modal"

import { countDayFromTimeStamp, dateKebabFormat } from "../utils/date"
import { IVacation, TVacation } from "../types/DB"

interface IRequestObject {
  startDateTimeStamp: number
  endDateTimeStamp: number
  type: TVacation
}

interface IVcationState extends IVacation {
  startDateTimeStamp: number
  endDateTimeStamp: number
}

interface IAppState {
  modal: {
    isOpen: boolean
    countDays: number
    disabledBtn: boolean
  }
  vacation: IVcationState
}

class App extends Component {
  state: IAppState = {
    modal: {
      isOpen: true,
      countDays: countDayFromTimeStamp(Date.parse(dateKebabFormat(8)) - Date.parse(dateKebabFormat(0))),
      disabledBtn: false,
    },
    vacation: {
      startDate: dateKebabFormat(0),
      startDateTimeStamp: Date.parse(dateKebabFormat(0)),
      endDate: dateKebabFormat(8),
      endDateTimeStamp: Date.parse(dateKebabFormat(8)),
      type: "UnPaid",
    },
  }

  closeModal = () => {
    const modal = Object.assign({}, this.state.modal)
    this.setState({ modal: { ...modal, isOpen: false } })
  }

  onSumbit = (e: React.MouseEvent) => {
    e.preventDefault()

    const { startDateTimeStamp, endDateTimeStamp, type } = this.state.vacation

    const requestObj: IRequestObject = {
      startDateTimeStamp,
      endDateTimeStamp,
      type,
    }

    console.log("Submit", requestObj)
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vacation = Object.assign({}, this.state.vacation)
    const { name, value } = e.target

    this.setState({ vacation: { ...vacation, [name]: value, [name + "TimeStamp"]: Date.parse(value) } }, () => {
      const modal = Object.assign({}, this.state.modal)

      const { endDateTimeStamp, startDateTimeStamp } = this.state.vacation

      const diff = endDateTimeStamp - startDateTimeStamp

      if (diff > 0) this.setState({ modal: { ...modal, disabledBtn: false, countDays: countDayFromTimeStamp(diff) } })
      if (diff <= 0) this.setState({ modal: { ...modal, disabledBtn: true, countDays: "is Not Valid" } })
    })
  }

  handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const vacation = Object.assign({}, this.state.vacation)

    this.setState({ vacation: { ...vacation, type: e.target.value } })
  }

  render() {
    const {
      modal: { isOpen, countDays, disabledBtn },
      vacation: { startDate, endDate, type },
    } = this.state

    return (
      <Modal open={isOpen} onClose={this.closeModal}>
        <ModalHeader title="Vacation Request" countDays={countDays} />
        <ModalBody>
          <FormDates title="Dates" inner>
            <InputDate title="From" onChange={this.handleChangeInput} value={startDate} name="startDate" />
            <InputDate title="To" onChange={this.handleChangeInput} value={endDate} name="endDate" />
          </FormDates>
          <FormDates title="Vac Type">
            <Select value={type} onChange={this.handleChangeSelect} icon={arrowDown}>
              <Option title="Paid Day Off (PD)" value="UnPaid" />
              <Option title="Paid Day On (PD)" value="Paid" />
            </Select>
          </FormDates>
        </ModalBody>
        <ModalFooter>
          <Button secondary onClick={this.closeModal}>
            Cancel
          </Button>
          <Button type="submit" disabled={disabledBtn} onClick={this.onSumbit}>
            Send
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default App

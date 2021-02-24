import React, { Component } from "react"

import departmentParts from "../api/DB"

import Navigation from "../components/CalendarNavigation"
import CalendarHeader from "../components/CalendarHeader/CalendarHeader"
import Team from "../components/CalendarBody/Team"
import { Button } from "./../components/common"
import FormDates from "./../components/FormDates"
import InputDate from "./../components/InputDate"
import { Select, Option } from "../components/Select/"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../components/Modal"

import { countDayFromTimeStamp, dateKebabFormat, daysInMonth } from "../utils/date"
import { IVacation, TVacation, ITeam } from "../types/DB"

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
  currentDate: Date
  daysInMonth: number
  teams: ITeam[]
  modal: {
    isOpen: boolean
    countDays: number
    disabledBtn: boolean
  }
  modalVacation: IVcationState
}

class App extends Component {
  state: IAppState = {
    currentDate: new Date(),
    daysInMonth: daysInMonth(new Date()),
    teams: [],
    modal: {
      isOpen: false,
      countDays: countDayFromTimeStamp(Date.parse(dateKebabFormat(8)) - Date.parse(dateKebabFormat(1))),
      disabledBtn: false,
    },
    modalVacation: {
      startDate: dateKebabFormat(1),
      startDateTimeStamp: Date.parse(dateKebabFormat(1)),
      endDate: dateKebabFormat(8),
      endDateTimeStamp: Date.parse(dateKebabFormat(8)),
      type: "UnPaid",
    },
  }

  componentDidMount() {
    this.setState({ teams: departmentParts.teams })
  }

  changeCurrentMonth = (symbol: "-" | "+", value: number) => {
    const currentDate = new Date(
      this.state.currentDate.setMonth(this.state.currentDate.getMonth() + parseInt(symbol + value, 10)),
    )
    this.setState({ currentDate, daysInMonth: daysInMonth(currentDate) })
  }

  changeModalVisible = (bool: boolean) => {
    const modal = Object.assign({}, this.state.modal)
    this.setState({ modal: { ...modal, isOpen: bool } })
  }

  onSumbit = (e: React.MouseEvent) => {
    e.preventDefault()

    const { startDateTimeStamp, endDateTimeStamp, type } = this.state.modalVacation

    const requestObj: IRequestObject = {
      startDateTimeStamp,
      endDateTimeStamp,
      type,
    }

    window.alert(JSON.stringify(requestObj, null, 2))
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vacation = Object.assign({}, this.state.modalVacation)
    const { name, value } = e.target

    this.setState({ vacation: { ...vacation, [name]: value, [name + "TimeStamp"]: Date.parse(value) } }, () => {
      const modal = Object.assign({}, this.state.modal)

      const { endDateTimeStamp, startDateTimeStamp } = this.state.modalVacation

      const diff = endDateTimeStamp - startDateTimeStamp

      if (diff > 0) this.setState({ modal: { ...modal, disabledBtn: false, countDays: countDayFromTimeStamp(diff) } })
      if (diff <= 0) this.setState({ modal: { ...modal, disabledBtn: true, countDays: "is Not Valid" } })
    })
  }

  handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const modalVacation = Object.assign({}, this.state.modalVacation)
    this.setState({ modalVacation: { ...modalVacation, type: e.target.value } })
  }

  render() {
    const {
      currentDate,
      daysInMonth,
      teams,
      modal: { isOpen, countDays, disabledBtn },
      modalVacation: { startDate, endDate, type },
    } = this.state
    return (
      <>
        <div className="container">
          <Navigation date={this.state.currentDate} changeCurrentMonth={this.changeCurrentMonth} />
          <table className="calendar-table">
            <CalendarHeader
              date={currentDate}
              daysInMonth={daysInMonth}
              handleClick={this.changeModalVisible.bind(null, true)}
            />

            <tbody>
              {teams.map((team: ITeam, index: number) => (
                <Team
                  key={team.teamId}
                  team={team}
                  date={currentDate}
                  allDaysInMonth={daysInMonth}
                  themeIndex={index}
                />
              ))}
            </tbody>
          </table>
        </div>

        <Modal open={isOpen} onClose={this.changeModalVisible.bind(null, false)}>
          <ModalHeader title="Vacation Request" countDays={countDays} />
          <ModalBody>
            <FormDates title="Dates" inner>
              <InputDate title="From" onChange={this.handleChangeInput} value={startDate} name="startDate" />
              <InputDate title="To" onChange={this.handleChangeInput} value={endDate} name="endDate" />
            </FormDates>
            <FormDates title="Vac Type">
              <Select value={type} onChange={this.handleChangeSelect}>
                <Option title="Paid Day Off (PD)" value="UnPaid" />
                <Option title="Paid Day On (PD)" value="Paid" />
              </Select>
            </FormDates>
          </ModalBody>
          <ModalFooter>
            <Button secondary onClick={this.changeModalVisible.bind(null, false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={disabledBtn} onClick={this.onSumbit}>
              Send
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default App

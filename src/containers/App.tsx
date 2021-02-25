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

import { LOCALE_STORAGE_TEAMS } from "../constant"
import { countDayFromTimeStamp, dateKebabFormat, daysInMonth, formatDateViaDots } from "../utils/date"
import { TVacation, ITeam } from "../types/DB"
import { ID } from "../types/utilsTypes"

interface IAppState {
  currentDate: Date
  daysInMonth: number
  teams: ITeam[]
  modal: {
    isOpen: boolean
    countDays: number
    disabledBtn: boolean
  }
  inputsData: {
    startDate: string
    startDateTimeStamp: number
    endDate: string
    endDateTimeStamp: number
  }
  selectsData: {
    currentTeamId: ID
    currentMemberId: ID
    currentType: TVacation
  }
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
    inputsData: {
      startDate: dateKebabFormat(1),
      startDateTimeStamp: Date.parse(dateKebabFormat(1)),
      endDate: dateKebabFormat(8),
      endDateTimeStamp: Date.parse(dateKebabFormat(8)),
    },
    selectsData: {
      currentTeamId: "",
      currentMemberId: "",
      currentType: "UnPaid",
    },
  }

  componentDidMount() {
    // Симуляция GET запроса
    const selectsData = Object.assign({}, this.state.selectsData)
    const dataWithLocalStorage = JSON.parse(localStorage.getItem(LOCALE_STORAGE_TEAMS) || "")

    this.setState({
      teams: dataWithLocalStorage ? dataWithLocalStorage : departmentParts.teams,
      selectsData: {
        ...selectsData,
        currentTeamId: dataWithLocalStorage ? dataWithLocalStorage[0].teamId : departmentParts.teams[0].teamId,
        currentMemberId: dataWithLocalStorage
          ? dataWithLocalStorage[0].members[0].memberId
          : departmentParts.teams[0].members[0].memberId,
      },
    })
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

    const {
      inputsData: { startDate: startDateOld, endDate: endDateOld },
      selectsData: { currentType, currentMemberId, currentTeamId },
    } = this.state

    // Симуляция POST запроса

    const member = departmentParts.teams
      .find(({ teamId }) => teamId === +currentTeamId)
      ?.members.find(({ memberId }) => memberId === +currentMemberId)

    const requestVacation = {
      startDate: formatDateViaDots(startDateOld.split("-")),
      endDate: formatDateViaDots(endDateOld.split("-")),
      type: currentType,
    }

    if (!member?.vacations.some((el) => JSON.stringify(requestVacation) === JSON.stringify(el))) {
      member?.vacations.push(requestVacation)

      this.setState({ teams: departmentParts.teams })
      localStorage.setItem(LOCALE_STORAGE_TEAMS, JSON.stringify(departmentParts.teams))
      window.alert("Отпуск установлен")
    } else {
      window.alert("Такой уже существует")
    }

    this.changeModalVisible(false)
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = Object.assign({}, this.state.inputsData)
    const { name, value } = e.target

    this.setState({ inputsData: { ...inputsData, [name]: value, [name + "TimeStamp"]: Date.parse(value) } }, () => {
      const modal = Object.assign({}, this.state.modal)

      const { endDateTimeStamp, startDateTimeStamp } = this.state.inputsData

      const diff = endDateTimeStamp - startDateTimeStamp

      if (diff > 0) this.setState({ modal: { ...modal, disabledBtn: false, countDays: countDayFromTimeStamp(diff) } })
      if (diff <= 0) this.setState({ modal: { ...modal, disabledBtn: true, countDays: "is Not Valid" } })
    })
  }

  handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectsData = Object.assign({}, this.state.selectsData)
    const name = e.target.name.replace(/^./g, (match) => match.toUpperCase())

    this.setState({ selectsData: { ...selectsData, ["current" + name]: e.target.value } })
  }

  render() {
    const {
      currentDate,
      daysInMonth,
      teams,
      modal: { isOpen, countDays, disabledBtn },
      inputsData: { startDate, endDate },
      selectsData: { currentTeamId, currentMemberId, currentType },
    } = this.state

    return (
      <>
        <div className="container">
          <Navigation date={currentDate} changeCurrentMonth={this.changeCurrentMonth} />
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
            <FormDates title="Team">
              <Select value={currentTeamId} name="teamId" onChange={this.handleChangeSelect}>
                {teams.map(({ name, teamId }: ITeam, index) => (
                  <Option key={index} title={name} value={teamId} />
                ))}
              </Select>
            </FormDates>
            <FormDates title="User">
              <Select value={currentMemberId} name="memberId" onChange={this.handleChangeSelect}>
                {teams
                  .find((el) => el.teamId === +currentTeamId)
                  ?.members.map(({ name, memberId }) => {
                    return <Option key={memberId} title={name} value={memberId} />
                  })}
              </Select>
            </FormDates>

            <FormDates title="Vac Type">
              <Select value={currentType} name="type" onChange={this.handleChangeSelect}>
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

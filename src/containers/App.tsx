import React, { Component } from 'react'

import Navigation from '../components/CalendarNavigation'
import CalendarHeader from '../components/CalendarHeader/CalendarHeader'
import Team from '../components/Team/Team'
import { Button } from './../components/common'
import FormDates from '../components/common/FormDates'
import InputDate from '../components/common/InputDate'
import { Select, Option } from '../components/common/Select'
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../components/common/Modal'

import { countDayFromTimeStamp, dateKebabFormat, getAllDaysInMonth } from '../utils/date'

import { ITeam } from '../types/model/team'
import { EVacationType, TVacation } from '../types/model/vacation'
import { ID } from '../types/utilsTypes'
import { getTeams } from '../api/teams'

interface IAppState {
  date: Date
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
    date: new Date(),
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
      currentTeamId: '',
      currentMemberId: '',
      currentType: EVacationType.UN_PAID,
    },
  }

  componentDidMount() {
    // const selectsData = Object.assign({}, this.state.selectsData)

    getTeams()
      .then((teams) => {
        this.setState({ teams })
      })
      .catch((err) => {
        console.log(err)
      })

    // this.setState({
    // teams,
    // selectsData: {
    // ...selectsData,
    // currentTeamId: teams[0].teamId,
    // currentMemberId: teams[0].members[0].memberId
  }

  handleOnChangeMonth = (date: Date) => {
    this.setState({ date })
  }

  changeModalVisible = () => {
    const modal = Object.assign({}, this.state.modal)
    this.setState({ modal: { ...modal, isOpen: !modal.isOpen } })
  }

  onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()

    const {
      inputsData: { startDate: startDateOld, endDate: endDateOld },
      selectsData: { currentType, currentMemberId, currentTeamId },
    } = this.state

    // const member = departmentTeams.teams
    // .find(({ teamId }) => +teamId === currentTeamId)
    // ?.members.find(({ memberId }) => +memberId === currentMemberId)

    // const requestVacation: IVacation = {
    // startDate: formatDateViaDots(startDateOld.split('-')),
    // endDate: formatDateViaDots(endDateOld.split('-')),
    // type: currentType,
    // }

    // if (!member?.vacations.some((el) => JSON.stringify(requestVacation) === JSON.stringify(el))) {
    // member?.vacations.push(requestVacation)

    // makeRequest(TEAMS_URL, {
    // ...OPTIONS_FOR_GET_REQUEST,
    // body: JSON.stringify(departmentTeams),
    // }).then(({ teams }: IDepartmentTeams) => this.setState({ teams }))
    // } else {
    // window.alert('Такой уже существует')
    // }

    // this.changeModalVisible(false)
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputsData = Object.assign({}, this.state.inputsData)
    const { name, value } = e.target

    this.setState({ inputsData: { ...inputsData, [name]: value, [name + 'TimeStamp']: Date.parse(value) } }, () => {
      const modal = Object.assign({}, this.state.modal)

      const { endDateTimeStamp, startDateTimeStamp } = this.state.inputsData

      const diff = endDateTimeStamp - startDateTimeStamp

      if (diff > 0) this.setState({ modal: { ...modal, disabledBtn: false, countDays: countDayFromTimeStamp(diff) } })
      if (diff <= 0) this.setState({ modal: { ...modal, disabledBtn: true, countDays: 'is Not Valid' } })
    })
  }

  handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { teams, selectsData } = this.state
    const cpSelectsData = Object.assign({}, selectsData)

    const name = `current${e.target.name.replace(/^./g, (match) => match.toUpperCase())}`

    switch (name) {
      case 'currentType': {
        this.setState({ selectsData: { ...cpSelectsData, [name]: e.target.value } })
        break
      }
      case 'currentTeamId': {
        const value = +e.target.value
        this.setState({
          selectsData: {
            ...cpSelectsData,
            currentTeamId: value,
            // currentMemberId: teams.find(({ teamId }) => +teamId === value)?.members[0].memberId,
          },
        })
        break
      }
      case 'currentMemberId': {
        this.setState({ selectsData: { ...cpSelectsData, [name]: +e.target.value } })
        break
      }
      default: {
        break
      }
    }
  }

  render() {
    const {
      date,
      teams,
      modal: { isOpen, countDays, disabledBtn },
      inputsData: { startDate, endDate },
      selectsData: { currentTeamId, currentMemberId, currentType },
    } = this.state

    return (
      <>
        <div className="container">
          <Navigation date={date} onChangeMonth={this.handleOnChangeMonth} />
          <table className="calendar-table">
            <CalendarHeader date={date}>
              <Button iconPlus onClick={this.changeModalVisible}>
                Add Vacation
              </Button>
            </CalendarHeader>

            <tbody className="calendar-body">
              {teams.map((team, index) => (
                <Team key={team.id} team={team} date={date} themeIndex={index} />
              ))}
            </tbody>
          </table>
        </div>

        <Modal open={isOpen} onClose={this.changeModalVisible}>
          <ModalHeader title="Vacation Request" countDays={countDays} />
          <ModalBody>
            <FormDates title="Dates" inner>
              <InputDate title="From" onChange={this.handleChangeInput} value={startDate} name="startDate" />
              <InputDate title="To" onChange={this.handleChangeInput} value={endDate} name="endDate" />
            </FormDates>
            <FormDates title="Team">
              <Select value={currentTeamId} name="teamId" onChange={this.handleChangeSelect}>
                {/* {teams.map(({ name, teamId }: ITeam, index) => ( */}
                {/* <Option key={index} title={name} value={teamId} /> */}
                {/* ))} */}
              </Select>
            </FormDates>
            <FormDates title="User">
              <Select value={currentMemberId} name="memberId" onChange={this.handleChangeSelect}>
                {/* {teams */}
                {/* .find(({ teamId }) => +teamId === +currentTeamId) */}
                {/* ?.members.map(({ name, memberId }) => ( */}
                {/* <Option key={memberId} title={name} value={memberId} /> */}
                {/* ))} */}
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
            <Button type="submit" disabled={disabledBtn} onClick={this.onSubmit}>
              Send
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default App

import React, { useState, useEffect, useCallback } from 'react'

import { Button } from './../components/common'
import Navigation from '../components/CalendarNavigation'
import CalendarHeader from '../components/CalendarHeader/CalendarHeader'
import Team from '../components/Team/Team'
import CalendarFooter from '../components/CalendarFooter/CalendarFooter'
import Summary from '../components/Summary'
import CalendarModal from '../components/CalendarModal'

import { getTeams } from '../api/teams'
import { countDayFromTimeStamp, dateKebabFormat, getAllDaysInMonth, lastDayInMonth } from '../utils/date'
import { getSplitVacations } from '../utils/vacations'
import { getPercentageOfAbsentCount } from '../utils/teams'

import { ITeam } from '../types/model/team'
import { EVacationType, TVacation } from '../types/model/vacation'
import { ID } from '../types/utilsTypes'
import { useToggle } from '../hooks'

// interface IApp {
// date: Date
// teams: ITeam[]
// countUsers: number
// percent: number
// modal: {
//   isOpen: boolean
//   countDays: number
//   disabledBtn: boolean
// }
// inputsData: {
//   startDate: string
//   startDateTimeStamp: number
//   endDate: string
//   endDateTimeStamp: number
// }
// selectsData: {
//   currentTeamId: ID
//   currentMemberId: ID
//   currentType: TVacation
// }
// }

const App = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [teams, setTeams] = useState<ITeam[]>([])
  const [countUsers, setCountUsers] = useState(0)
  const [percent, setPercent] = useState(0)
  const calendarModal = useToggle()

  const handleOnChangeMonth = (date: Date) => {
    setDate(date)
  }

  useEffect(() => {
    getTeams()
      .then((teams) => {
        setTeams(teams)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const getCountUsers = (): number => teams.reduce((acc, team) => (acc += team.members.length), 0)

    setCountUsers(getCountUsers())
  }, [teams])

  useEffect(() => {
    const getPercent = (): number => teams.reduce((acc, team) => (acc += getPercentageOfAbsentCount(team, date)), 0)

    setPercent(getPercent())
  }, [date, teams])

  // modal: {
  //
  // },
  // inputsData: {

  // },
  // selectsData: {
  //   currentTeamId: '',
  //   currentMemberId: '',
  //   currentType: EVacationType.UN_PAID,
  // },
  // }

  // const selectsData = Object.assign({}, this.state.selectsData)

  // this.setState({
  // teams,
  // selectsData: {
  // ...selectsData,
  // currentTeamId: teams[0].teamId,
  // currentMemberId: teams[0].members[0].memberId

  // onSubmit = (e: React.MouseEvent) => {
  // e.preventDefault()

  // const {
  // inputsData: { startDate: startDateOld, endDate: endDateOld },
  // selectsData: { currentType, currentMemberId, currentTeamId },
  // } = this.state

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
  // }

  // handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const inputsData = Object.assign({}, this.state.inputsData)
  // const { name, value } = e.target

  // this.setState({ inputsData: { ...inputsData, [name]: value, [name + 'TimeStamp']: Date.parse(value) } }, () => {
  // const modal = Object.assign({}, this.state.modal)

  // const { endDateTimeStamp, startDateTimeStamp } = this.state.inputsData

  // const diff = endDateTimeStamp - startDateTimeStamp

  // if (diff > 0) this.setState({ modal: { ...modal, disabledBtn: false, countDays: countDayFromTimeStamp(diff) } })
  // if (diff <= 0) this.setState({ modal: { ...modal, disabledBtn: true, countDays: 'is Not Valid' } })
  // })
  // }

  // handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  // const { teams, selectsData } = this.state
  // const cpSelectsData = Object.assign({}, selectsData)

  // const name = `current${e.target.name.replace(/^./g, (match) => match.toUpperCase())}`

  // switch (name) {
  // case 'currentType': {
  // this.setState({ selectsData: { ...cpSelectsData, [name]: e.target.value } })
  // break
  // }
  // case 'currentTeamId': {
  // const value = +e.target.value
  // this.setState({
  // selectsData: {
  // ...cpSelectsData,
  // currentTeamId: value,
  // currentMemberId: teams.find(({ teamId }) => +teamId === value)?.members[0].memberId,
  // },
  // })
  // break
  // }
  // case 'currentMemberId': {
  // this.setState({ selectsData: { ...cpSelectsData, [name]: +e.target.value } })
  // break
  // }/
  // default: {
  // break
  // }
  // }
  // }

  return (
    <>
      <div className="container">
        <Navigation date={date} onChangeMonth={handleOnChangeMonth} />
        <table className="calendar-table">
          <CalendarHeader date={date}>
            <Button iconPlus onClick={calendarModal.toggleOpen}>
              Add Vacation
            </Button>
          </CalendarHeader>

          <tbody className="calendar-body">
            {teams.map((team, index) => (
              <Team key={team.id} team={team} date={date} themeIndex={index} />
            ))}
          </tbody>
          <CalendarFooter date={date} teams={teams} />
        </table>
        <Summary date={date} countUsers={countUsers} percent={percent} />
      </div>

      <CalendarModal isOpen={calendarModal.isOpen} onClose={calendarModal.toggleOpen} onSubmit={() => {}} />
    </>
  )

  // modal: { isOpen, countDays, disabledBtn },
  // inputsData: { startDate, endDate },
  // selectsData: { currentTeamId, currentMemberId, currentType },
  // }
}

export default App

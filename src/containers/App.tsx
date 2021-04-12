import React, { useState, useEffect } from 'react'

import { Button } from './../components/common'
import Navigation from '../components/CalendarNavigation'
import CalendarHeader from '../components/CalendarHeader/CalendarHeader'
import Team from '../components/Team/Team'
import CalendarFooter from '../components/CalendarFooter/CalendarFooter'
import Summary from '../components/Summary'
import CalendarModal from '../components/CalendarModal'

import { getTeams } from '../api/teams'
import { getAllDaysInMonth, lastDayInMonth } from '../utils/date'
import { getSplitVacations } from '../utils/vacations'
import { getPercentageOfAbsentCount } from '../utils/teams'

import { ITeam } from '../types/model/team'
import { EVacationType, TVacation } from '../types/model/vacation'
import { ID } from '../types/utilsTypes'
import { useToggle } from '../hooks'

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

      <CalendarModal
        teams={teams}
        isOpen={calendarModal.isOpen}
        onClose={calendarModal.toggleOpen}
        onSubmit={() => {}}
      />
    </>
  )
}

export default App

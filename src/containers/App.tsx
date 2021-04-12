import React, { useState, useEffect } from 'react'

import { Button } from './../components/common'
import Navigation from '../components/CalendarNavigation'
import CalendarHeader from '../components/CalendarHeader/CalendarHeader'
import Team from '../components/Team/Team'
import CalendarFooter from '../components/CalendarFooter/CalendarFooter'
import Summary from '../components/Summary'
import CalendarModal from '../components/CalendarModal'

import { useToggle } from '../hooks'

import { getTeams } from '../api/teams'
import { getPercentageOfAbsentCount } from '../utils/teams'

import { ITeam } from '../types/model/team'

const App = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [teams, setTeams] = useState<ITeam[]>([])
  const [countUsers, setCountUsers] = useState(0)
  const [percent, setPercent] = useState(0)
  const calendarModal = useToggle()

  const handleOnChangeMonth = (date: Date) => {
    setDate(date)
  }

  const handleGetTeams = () => {
    getTeams()
      .then((teams) => {
        setTeams(teams)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleGetTeams()
  }, [])

  useEffect(() => {
    const getCountUsers = (): number => teams.reduce((acc, team) => (acc += team.members.length), 0)

    setCountUsers(getCountUsers())
  }, [teams])

  useEffect(() => {
    const getPercent = (): number => teams.reduce((acc, team) => (acc += getPercentageOfAbsentCount(team, date)), 0)

    setPercent(getPercent())
  }, [date, teams])

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
        getTeams={handleGetTeams}
        isOpen={calendarModal.isOpen}
        onClose={calendarModal.toggleOpen}
      />
    </>
  )
}

export default App

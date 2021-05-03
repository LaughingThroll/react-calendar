import React, { useState, useEffect } from 'react'

import { Button } from '../components/common'
import { CalendarNavigation, Summary, CalendarModal } from '../components'

import CalendarHeader from '../components/CalendarHeader/CalendarHeader'
import TeamComponent from '../components/Team/Team'
import CalendarFooter from '../components/CalendarFooter/CalendarFooter'

import { useToggle, useAsync } from '../hooks'

import { getTeams } from '../api/teams'
import { patchVacation } from '../api/vacations'
import { getPercentageOfAbsentCount } from '../utils/teams'

import { Team } from '../types/model/team'
import { Vacation, VacationDTO } from '../types/model/vacation'

const App = () => {
  const [date, setDate] = useState<Date>(new Date())
  const { data: teams, loading: teamsLoading, error: teamsError, setData: setTeams } = useAsync<Team[]>([], getTeams)
  const { asyncFn: asyncPathcVacation, error: vacationError } = useAsync<Vacation>({} as Vacation, patchVacation)
  const [countUsers, setCountUsers] = useState(0)
  const [percent, setPercent] = useState(0)
  const calendarModal = useToggle()

  const handleOnChangeMonth = (date: Date) => {
    setDate(date)
  }

  useEffect(() => {
    const getCountUsers = (): number => teams.reduce((acc, team) => (acc += team.members.length), 0)

    setCountUsers(getCountUsers())
  }, [teams])

  useEffect(() => {
    const getPercent = (): number =>
      teams.reduce((acc, team) => (acc += getPercentageOfAbsentCount(team.percentageOfAbsent, date)), 0)

    setPercent(getPercent())
  }, [date, teams])

  const onSubmit = (submitVacation: VacationDTO): Promise<void> => {
    return asyncPathcVacation(submitVacation).then((res) => {
      if (res) {
        getTeams().then((teams) => setTeams(teams))
      }
    })
  }

  return (
    <>
      <div className="container">
        <CalendarNavigation date={date} onChangeMonth={handleOnChangeMonth} classNames={['calendarNavigation']} />
        <table className="calendar-table">
          <CalendarHeader date={date}>
            <Button iconPlus onClick={calendarModal.toggleOpen}>
              Add Vacation
            </Button>
          </CalendarHeader>

          <tbody className="calendar-body">
            {teams.map((team, index) => (
              <TeamComponent key={team.id} team={team} date={date} themeIndex={index} />
            ))}
          </tbody>
          <CalendarFooter date={date} teams={teams} />
        </table>
        <Summary date={date} countUsers={countUsers} percent={percent} classNames={['calendar__summary']} />
      </div>

      <CalendarModal
        teams={teams}
        isOpen={calendarModal.isOpen}
        onClose={calendarModal.toggleOpen}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default React.memo(App)

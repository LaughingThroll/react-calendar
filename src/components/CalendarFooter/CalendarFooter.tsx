import React, { useState, useEffect } from 'react'

import FooterCell from './FooterCell'

import { getAllDaysInMonth, lastDayInMonth } from '../../utils/date'
import { getSplitVacations } from '../../utils/vacations'

import { IVacation } from '../../types/model/vacation'
import { ITeam } from '../../types/model/team'

interface ICalendarFooter {
  teams: ITeam[]
  date: Date
}

const CalendarFooter: React.FC<ICalendarFooter> = ({ teams, date }) => {
  const [vacations, setVacations] = useState<IVacation[]>([])

  useEffect(() => {
    const vacations = teams.flatMap(({ members }) => members).flatMap(({ vacations }) => vacations)
    setVacations(getSplitVacations(vacations, lastDayInMonth(date)))
  }, [date, teams])

  return (
    <tfoot className="calendar-footer calendar-table--indentation">
      <tr className="calendar-footer__row">
        <td className="calendar-footer__cell cell-gray">Day-Person-Stats</td>
        {getAllDaysInMonth(date).map((date, index) => {
          return <FooterCell key={index} date={date} vacations={vacations} />
        })}
        <td className="calendar-footer__cell cell-gray"></td>
      </tr>
    </tfoot>
  )
}

export default CalendarFooter

import React, { useState, useEffect } from 'react'

import styles from './calendarFooter.module.scss'

import { Cell, CellSumm } from '../common'

import { getAllDaysInMonth, lastDayInMonth } from '../../utils/date'
import { getSplitVacations, getSumVacationsDaysByDay } from '../../utils/vacations'

import { Vacation } from '../../types/model/vacation'
import { Team } from '../../types/model/team'

export interface CalendarFooterProps {
  teams: Team[]
  date: Date
  classNames?: string[]
}

const { calendarFooter, calendarFooter__cell, calendarFooter__row } = styles

const CalendarFooter: React.FC<CalendarFooterProps> = ({ teams, date, classNames = [] }) => {
  const [vacations, setVacations] = useState<Vacation[]>([])

  useEffect(() => {
    const vacations = teams.flatMap(({ members }) => members).flatMap(({ vacations }) => vacations)
    setVacations(getSplitVacations(vacations, lastDayInMonth(date)))
  }, [date, teams])

  return (
    <tfoot className={[calendarFooter, ...classNames].join(' ')}>
      <tr className={calendarFooter__row}>
        <Cell classNames={[calendarFooter__cell]}>Day-Person-Stats</Cell>
        {getAllDaysInMonth(date).map((date, index) => {
          return (
            <CellSumm key={index} cellDate={date} classNames={[calendarFooter__cell]}>
              {getSumVacationsDaysByDay(vacations, date)}
            </CellSumm>
          )
        })}
        <Cell classNames={[calendarFooter__cell]}></Cell>
      </tr>
    </tfoot>
  )
}

export default React.memo(CalendarFooter)

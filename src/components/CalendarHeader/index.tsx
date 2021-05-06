import React from 'react'

import styles from './calendarHeader.module.scss'

import CalendarHeaderCell from './CalendarHeaderCell'
import { CellSumm } from '../common'

import { getAllDaysInMonth } from '../../utils/date'

export interface CalendarHeaderProps {
  date: Date
  children?: any
  classNames?: string[]
}

const { calendarHeader, calendarHeader__row, calendarHeader__cell } = styles

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ date, children, classNames = [] }) => {
  return (
    <thead className={[calendarHeader, ...classNames].join(' ')}>
      <tr className={calendarHeader__row}>
        <th className={calendarHeader__cell}>{children}</th>
        {getAllDaysInMonth(date).map((date, index) => (
          <CalendarHeaderCell key={index} cellDate={date} classNames={[calendarHeader__cell]} />
        ))}
        <CellSumm classNames={[calendarHeader__cell]}>Sum </CellSumm>
      </tr>
    </thead>
  )
}

export default React.memo(CalendarHeader)

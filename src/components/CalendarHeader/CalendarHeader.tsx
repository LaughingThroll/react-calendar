import React from 'react'

import Button from '../common/Button'
import CalendarHeaderCell from './CalendarHeaderCell'

import { getAllDayInMonth } from '../../utils/date'

interface ICalendarHeader {
  date: Date
}

const CalendarHeader: React.FC<ICalendarHeader> = ({ date, children }) => {
  return (
    <thead>
      <tr className="calendar-header">
        <th className="calendar-header__cell">{children}</th>
        {getAllDayInMonth(date).map((date, index) => (
          <CalendarHeaderCell key={index} date={date} />
        ))}
        <th className="calendar-header__cell cell-gray"> Sum </th>
      </tr>
    </thead>
  )
}

export default CalendarHeader

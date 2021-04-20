import React from 'react'

import CalendarHeaderCell from './CalendarHeaderCell'

import { getAllDaysInMonth } from '../../utils/date'
import { TChildren } from '../../types/utilsTypes'

interface ICalendarHeader {
  date: Date
  children: TChildren
}

const CalendarHeader: React.FC<ICalendarHeader> = ({ date, children }) => {
  return (
    <thead className="calendar-header">
      <tr className="calendar-header__row">
        <th className="calendar-header__cell">{children}</th>
        {getAllDaysInMonth(date).map((date, index) => (
          <CalendarHeaderCell key={index} date={date} />
        ))}
        <th className="calendar-header__cell cell-gray"> Sum </th>
      </tr>
    </thead>
  )
}

export default React.memo(CalendarHeader)

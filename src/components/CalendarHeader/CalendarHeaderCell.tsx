import React from "react"

import { isWeekend } from "../../utils/vacations"
import { formatDayInBinaryString } from "../../utils/date"

interface ICalendarHeaderCell {
  date: Date
  dayNumber: number
}

const CalendarHeaderCell: React.FC<ICalendarHeaderCell> = ({ date, dayNumber }) => {
  return (
    <th className={`calendar-header__cell ${isWeekend(date) ? "cell-gray" : ""}`}>
      <span className="calendar-header__day">{formatDayInBinaryString(date)}</span>
      <span className="calendar-header__number">{dayNumber}</span>
    </th>
  )
}

export default CalendarHeaderCell

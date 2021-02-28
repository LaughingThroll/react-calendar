import React from "react"

import { isWeekend } from "../../utils/date"

interface ICalendarHeaderCell {
  dayString: string
  dayNumber: number
}

const CalendarHeaderCell: React.FC<ICalendarHeaderCell> = ({ dayString, dayNumber }) => {
  return (
    <th className={`calendar-header__cell ${isWeekend(dayString) && "cell-gray"}`}>
      <span className="calendar-header__day">{dayString}</span>
      <span className="calendar-header__number">{dayNumber}</span>
    </th>
  )
}

export default CalendarHeaderCell

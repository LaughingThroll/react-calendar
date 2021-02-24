import React from "react"

interface ICalendarHeaderCell {
  dayString: string
  dayNumber: number
}

const CalendarHeaderCell: React.FC<ICalendarHeaderCell> = ({ dayString, dayNumber }) => {
  return (
    <th className={`calendar-header__cell ${dayString === "Sa" || dayString === "Su" ? "cell-gray" : ""}`}>
      <span className="calendar-header__day">{dayString}</span>
      <span className="calendar-header__number">{dayNumber}</span>
    </th>
  )
}

export default CalendarHeaderCell

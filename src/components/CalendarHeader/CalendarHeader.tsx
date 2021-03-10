import React from "react"

import Button from "../common/Button"
import CalendarHeaderCell from "./CalendarHeaderCell"

interface ICalendarHeader {
  allDays: Date[]
  handleClick?: () => void
}

const CalendarHeader: React.FC<ICalendarHeader> = ({ allDays, handleClick }) => {
  return (
    <thead className="calendar-header">
      <tr className="calendar-header__row">
        <th className="calendar-header__cell">
          <Button iconPlus onClick={handleClick}>
            Add Vacation
          </Button>
        </th>
        {allDays.map((date, index) => (
          <CalendarHeaderCell key={index} date={date} dayNumber={date.getDate()} />
        ))}
        <th className="calendar-header__cell cell-gray"> Sum </th>
      </tr>
    </thead>
  )
}

export default CalendarHeader

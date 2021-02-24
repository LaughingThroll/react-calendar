import React from "react"

import Button from "../common/Button"
import CalendarHeaderCell from "./CalendarHeaderCell"

import { formatDayInBinaryString } from "../../utils/date"

interface ICalendarHeader {
  date: Date
  daysInMonth: number
  handleClick?: () => void
}

const CalendarHeader: React.FC<ICalendarHeader> = ({ date, daysInMonth, handleClick }) => {
  return (
    <thead>
      <tr className="calendar-header">
        <th className="calendar-header__cell">
          <Button iconPlus onClick={handleClick}>
            Add Vacation
          </Button>
        </th>
        {new Array(daysInMonth).fill(0).map((_, day) => (
          <CalendarHeaderCell key={day} dayString={formatDayInBinaryString(date, day + 1)} dayNumber={day + 1} />
        ))}
        <th className="calendar-header__cell cell-gray"> Sum </th>
      </tr>
    </thead>
  )
}

export default CalendarHeader

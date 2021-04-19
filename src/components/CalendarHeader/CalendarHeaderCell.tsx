import React from 'react'
import classnames from 'classnames'

import { isWeekend, getDayInBinaryString } from '../../utils/date/index'

interface ICalendarHeaderCell {
  date: Date
}

const CalendarHeaderCell: React.FC<ICalendarHeaderCell> = ({ date }) => {
  return (
    <th
      className={classnames({
        'calendar-header__cell': true,
        'cell-gray': isWeekend(date),
      })}
    >
      <span className="calendar-header__day">{getDayInBinaryString(date)}</span>
      <span className="calendar-header__number">{date.getDate()}</span>
    </th>
  )
}

export default React.memo(CalendarHeaderCell)

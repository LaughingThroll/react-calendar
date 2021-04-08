import React from 'react'

import FooterCell from './FooterCell'

import { getAllDaysInMonth } from '../../utils/date'

import { IVacation } from '../../types/model/vacation'

interface ICalendarFooter {
  vacations: IVacation[]
  date: Date
}

const CalendarFooter: React.FC<ICalendarFooter> = ({ vacations, date }) => {
  return (
    <tfoot className="calendar-footer calendar-table--indentation">
      <tr className="calendar-footer__row">
        <td className="calendar-footer__cell cell-gray">Day-Person-Stats</td>
        {getAllDaysInMonth(date).map((date, index) => {
          return <FooterCell key={index} date={date} vacations={vacations} />
        })}
        <td className="calendar-footer__cell cell-gray"></td>
      </tr>
    </tfoot>
  )
}

export default CalendarFooter

import React from 'react'
import classnames from 'classnames'

import { isWeekend } from '../../utils/date'
import { getSumVacationsDaysByDay } from '../../utils/vacations'

import { IVacation } from '../../types/model/vacation'

interface IFooterCell {
  vacations: IVacation[]
  date: Date
}

const FooterCell: React.FC<IFooterCell> = ({ vacations, date }) => {
  return (
    <td
      className={classnames({
        'cell-summ': true,
        'calendar-footer__cell': true,
        'cell-gray': isWeekend(date),
      })}
    >
      {getSumVacationsDaysByDay(vacations, date)}
    </td>
  )
}

export default FooterCell

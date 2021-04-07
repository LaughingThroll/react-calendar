import React from 'react'
import classnames from 'classnames'

import { useCalucateWidth } from '../../hooks'
import { isWeekend } from '../../utils/date'
import { getExsistingTypeVacation, isFirstDay, isLastDay, getDaysInVacation } from '../../utils/vacations'
import { EVacationType, IVacation } from '../../types/model/vacation'

interface IMemberCell {
  date: Date
  vacations: IVacation[]
}

const MemberCell: React.FC<IMemberCell> = ({ date, vacations }) => {
  const vacationElement = useCalucateWidth<Date, HTMLDivElement>(date)
  const isPaid = getExsistingTypeVacation(vacations, date, EVacationType.PAID)
  const isUnPaid = getExsistingTypeVacation(vacations, date, EVacationType.UN_PAID)
  const isStartDay = isFirstDay(vacations, date)
  const isEndDay = isLastDay(vacations, date)

  const currentStartVacation = vacations.find(({ startDate }): boolean | undefined => {
    return date.toLocaleString().split(',')[0] === startDate
  })

  const countDayInVacation = currentStartVacation && getDaysInVacation(currentStartVacation)

  return (
    <td
      className={classnames({
        'calendar-body__cell': true,
        'cell-gray': isWeekend(date),
      })}
    >
      {(isUnPaid || isPaid) && (
        <div
          ref={vacationElement.elementRef}
          className={classnames({
            'cell-vacations': true,
            'cell-vacations--paid': isPaid,
            'cell-vacations--unpaid': isUnPaid,
            'cell-vacations--start-vac': isStartDay,
            'cell-vacations--end-vac': isEndDay,
            'cell-vacations--unpaid-start-vac': isStartDay && isUnPaid,
            'cell-vacations--unpaid-end-vac': isEndDay && isUnPaid,
          })}
        >
          {isStartDay && (
            <span
              style={{ width: countDayInVacation ? vacationElement.width * countDayInVacation : 100 }}
              className="cell-vacations__text"
            >
              Pd
            </span>
          )}
        </div>
      )}
    </td>
  )
}

export default MemberCell

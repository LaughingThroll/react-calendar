import React from 'react'
import classnames from 'classnames'

import { useCalucateWidth } from '../../hooks'
import { isWeekend, isEqualDate } from '../../utils/date'
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

  const currentStartVacation: IVacation | undefined = vacations.find(({ startDate }) => {
    return isEqualDate(date, startDate.split('.'))
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
          {countDayInVacation && (
            <span style={{ width: vacationElement.width * countDayInVacation }} className="cell-vacations__text">
              Pd
            </span>
          )}
        </div>
      )}
    </td>
  )
}

export default React.memo(MemberCell)

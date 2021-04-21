import React from 'react'
import classnames from 'classnames'

import { useCalucateWidth } from '../../hooks'
import { isWeekend, isEqualDate, getCountDays } from '../../utils/date'
import { getTypeVacation, isFirstDay, isLastDay } from '../../utils/vacations'
import { VacationTypes, Vacation } from '../../types/model/vacation'

interface IMemberCell {
  date: Date
  vacations: Vacation[]
}

const MemberCell: React.FC<IMemberCell> = ({ date, vacations }) => {
  const vacationElement = useCalucateWidth<Date, HTMLDivElement>(date)
  const isPaid = getTypeVacation(vacations, date, VacationTypes.PAID)
  const isUnPaid = getTypeVacation(vacations, date, VacationTypes.UN_PAID)
  const isStartDay = isFirstDay(vacations, date)
  const isEndDay = isLastDay(vacations, date)

  const currentStartVacation: Vacation | undefined = vacations.find(({ startDate }) => {
    return isEqualDate(date, startDate.split('-'))
  })
  const countDayInVacation =
    currentStartVacation && getCountDays(currentStartVacation.startDate, currentStartVacation.endDate) + 1

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

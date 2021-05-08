import React from 'react'
import classnames from 'classnames'

import { Cell } from '../../common'

import { useCalucateWidth } from '../../../hooks'
import { isEqualDate, getCountDays } from '../../../utils/date'
import { getTypeVacation, isFirstDay, isLastDay } from '../../../utils/vacations'
import { VacationTypes, Vacation } from '../../../types/model/vacation'

export interface MemberCellProps {
  date: Date
  vacations: Vacation[]
}

const MemberCell: React.FC<MemberCellProps> = ({ date, vacations }) => {
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
    <Cell cellDate={date} classNames={['calendar-body__cell']}>
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
    </Cell>
  )
}

export default React.memo(MemberCell)

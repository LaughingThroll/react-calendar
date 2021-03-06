import React from 'react'
import './member.scss'

import MemberCell from './MemberCell'
import { CellSumm } from '../common'

import { getAllDaysInMonth } from '../../utils/date'
import { getSumVacationsDaysByMonth, getSplitVacations } from '../../utils/vacations'

import { Member } from '../../types/model/member'

export interface MemberProps extends Member {
  date: Date
  theme?: string
}

const MemberComponent: React.FC<MemberProps> = ({ date, theme, name, vacations }) => {
  const allDays = getAllDaysInMonth(date)
  const newVacations = getSplitVacations(vacations, allDays.length)

  const summVacationsInMonth = getSumVacationsDaysByMonth(newVacations, date)

  return (
    <tr className={`calendar-body__row  ${theme}`}>
      <td className="member calendar-body__cell">
        <span className="member__name">{name}</span>
      </td>
      {allDays.map((date, index) => (
        <MemberCell key={index} date={date} vacations={newVacations} />
      ))}

      <CellSumm classNames={['calendar-body__cell', 'cell-gray']}>{summVacationsInMonth}</CellSumm>
    </tr>
  )
}

export default React.memo(MemberComponent)

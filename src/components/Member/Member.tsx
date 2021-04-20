import React from 'react'
import MemberCell from './MemberCell'

import { getAllDaysInMonth } from '../../utils/date'
import { getSumVacationsDaysByMonth, getSplitVacations } from '../../utils/vacations'

import { IMember } from '../../types/model/member'

interface ITeamMember extends IMember {
  date: Date
  theme?: string
}

const Member: React.FC<ITeamMember> = ({ date, theme, name, vacations }) => {
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
      <td className="calendar-body__cell cell-gray cell-summ">{summVacationsInMonth}</td>
    </tr>
  )
}

export default React.memo(Member)

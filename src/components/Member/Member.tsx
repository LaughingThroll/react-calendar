import React from 'react'
import MemberCell from './MemberCell'

import { getAllDaysInMonth } from '../../utils/date'
import { getSplitVacations } from '../../utils/vacations'

import { IMember } from '../../types/model/member'

interface ITeamMember extends IMember {
  date: Date
  theme?: string
  isGroupOpen: boolean
}

const Member: React.FC<ITeamMember> = ({ date, theme, name, vacations, isGroupOpen }) => {
  const allDays = getAllDaysInMonth(date)
  const newVacation = getSplitVacations(vacations, allDays.length)

  return (
    <tr className={`calendar-body__row  ${theme} ${isGroupOpen ? '' : 'is-team-member-closed'}`}>
      <td className="member calendar-body__cell">
        <span className="member__name">{name}</span>
      </td>
      {allDays.map((date, index) => (
        <MemberCell key={index} date={date} vacations={newVacation} />
      ))}
      <td className="calendar-body__cell cell-gray">4</td>
    </tr>
  )
}

export default Member

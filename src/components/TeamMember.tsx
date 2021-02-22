import React from "react"

import TeamCell from "./TeamCell"

import { formatDayInBinaryString } from "./../utils/date"

interface ITeamMember {
  date: Date
  allDaysInMonth: number
  name: string
  theme?: string
}

const TeamMember: React.FC<ITeamMember> = ({ date, allDaysInMonth, theme, name }) => {
  return (
    <tr className={`calendar-body ${theme}`}>
      <td className="team team--member calendar-body__cell ">
        <span className="team__name">${name}</span>
      </td>
      {new Array(allDaysInMonth).fill(0).map((_, day) => (
        <TeamCell dayString={formatDayInBinaryString(date, day + 1)} />
      ))}
      <td className="calendar-body__cell cell-gray">4</td>
    </tr>
  )
}

export default TeamMember

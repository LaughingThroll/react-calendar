import React from "react"
import TeamCell from "./TeamCell"
import { formatDayInBinaryString } from "../../utils/date"
import { IVacation } from "../../types/DB"

interface ITeamMember {
  date: Date
  allDaysInMonth: number
  name: string
  theme?: string
  vacations: Array<IVacation>
}

const TeamMember: React.FC<ITeamMember> = ({ date, allDaysInMonth, theme, name, vacations }) => {
  return (
    <tr className={`calendar-body ${theme}`}>
      <td className="team team--member calendar-team__cell">
        <span className="team__name">${name}</span>
      </td>
      {new Array(allDaysInMonth).fill(0).map((_, day) => (
        <TeamCell
          key={day}
          dayString={formatDayInBinaryString(date, day + 1)}
          vacations={vacations}
          day={day}
          date={date}
        />
      ))}
      <td className="calendar-team__cell cell-gray">4</td>
    </tr>
  )
}

export default TeamMember

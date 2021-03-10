import React, { useRef } from "react"

import TeamCell from "./TeamCell"
import SummCell from "./SummCell"

import { exsistTypeVacation, splitVacations, summDays, isFirstOrLastDay } from "../../utils/vacations"

import { IVacation } from "../../types/DB"
import classNames from "classnames"

interface ITeamMember {
  allDays: Date[]
  name: string
  theme?: string
  vacations: Array<IVacation>
  isGroupOpen: boolean
}

const TeamMember: React.FC<ITeamMember> = ({ allDays, theme, name, vacations, isGroupOpen }) => {
  const countRef = useRef<number>(0)
  const newVacations = splitVacations(vacations, allDays.length)

  return (
    <tr
      className={`${theme} ${classNames({
        "calendar-body__member": true,
        "is-team-member-closed": !isGroupOpen,
      })}`}
    >
      <td className="team team--member calendar-body__cell">
        <span className="team__name">{name}</span>
      </td>

      {allDays.map((date, index) => {
        countRef.current = summDays(newVacations, date)

        const isStartDay = isFirstOrLastDay(newVacations, date, "start")
        const isEndDay = isFirstOrLastDay(newVacations, date, "end")

        const isPaidCell = exsistTypeVacation(newVacations, date, "Paid")
        const isUnPaidCell = exsistTypeVacation(newVacations, date, "UnPaid")

        return (
          <TeamCell
            key={index}
            date={date}
            isPaidCell={isPaidCell}
            isUnPaidCell={isUnPaidCell}
            isStartDay={isStartDay}
            isEndDay={isEndDay}
          />
        )
      })}
      <SummCell count={countRef.current} />
    </tr>
  )
}

export default TeamMember

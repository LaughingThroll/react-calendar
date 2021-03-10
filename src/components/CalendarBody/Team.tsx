import React, { useState } from "react"

import iconUsers from "./../../assets/images/icons/users.svg"

import TeamCell from "./TeamCell"
import TeamMember from "./TeamMember"

import { THEMES } from "../../constant"
import { formatDayInBinaryString } from "../../utils/date"
import { IMember, ITeam } from "../../types/DB"
import classNames from "classnames"

interface ITeamComponent {
  team: ITeam
  date: Date
  allDays: Date[]
  themeIndex?: number
}

const Team: React.FC<ITeamComponent> = ({
  team: { members, percentageOfAbsent, name: nameTeam },
  allDays,
  date,
  themeIndex = 0,
}) => {
  const mainTheme = THEMES[themeIndex % THEMES.length][0]
  const [isGroupOpen, setIsGroupOpen] = useState(true)

  const handlerHideGroup = () => {
    setIsGroupOpen(!isGroupOpen)
  }

  return (
    <>
      <tr
        className={`
        ${mainTheme} 
        ${THEMES[themeIndex % THEMES.length][1]} 
        ${classNames({
          "calendar-body__team": true,
          "calendar-table--indentation": true,
          "is-group-closed": !isGroupOpen,
        })}`}
      >
        <td className="team team--common">
          <span className="team__name">{nameTeam}</span>
          <div className="team__other">
            <div className="team__users users">
              <img className="users__svg" src={iconUsers} alt="" />
              <span className="users__count">{members.length}</span>
            </div>
            <div className="team__weekend-percent weekend-percent">{percentageOfAbsent[date.getMonth()]}%</div>
            <button
              className={`button-arrow-up ${isGroupOpen ? "is-group-open-btn" : "is-group-closed-btn"}`}
              onClick={handlerHideGroup}
            ></button>
          </div>
        </td>
        {allDays.map((date, index) => (
          <TeamCell key={index} date={date} />
        ))}
        <td className="calendar-body__cell cell-gray"></td>
      </tr>
      {members.map(({ name: nameMember, vacations: arrayOfVacations }: IMember, day: number) => (
        <TeamMember
          key={day}
          allDays={allDays}
          name={nameMember}
          vacations={arrayOfVacations}
          theme={mainTheme}
          isGroupOpen={isGroupOpen}
        />
      ))}
    </>
  )
}

export default Team

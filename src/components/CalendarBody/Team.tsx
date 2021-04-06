import React, { useState } from 'react'

import iconUsers from './../../assets/images/icons/users.svg'

import TeamCell from './TeamCell'
import TeamMember from './TeamMember'

import { THEMES } from '../../constant'
import { formatDayInBinaryString } from '../../utils/date'

import { ITeam } from '../../types/model/team'
import { IMember } from '../../types/model/member'
// import { IMember, ITeam } from '../../types/DB'

interface ITeamComponent {
  team: ITeam
  date: Date
  allDaysInMonth: number
  themeIndex?: number
}

const Team: React.FC<ITeamComponent> = ({
  team: { members, percentageOfAbsent, name: nameTeam },
  allDaysInMonth,
  date,
  themeIndex = 0,
}) => {
  const mainTheme = THEMES[themeIndex % THEMES.length][0]
  const [isGroupOpen, setIsGrpupOpen] = useState(true)

  const handlerHideGroup = () => {
    setIsGrpupOpen(!isGroupOpen)
  }

  return (
    <>
      <tr
        className={`calendar-team calendar-table--indentation ${mainTheme} ${THEMES[themeIndex % THEMES.length][1]} ${
          isGroupOpen ? '' : 'is-group-closed'
        }`}
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
              className={`button-arrow-up ${isGroupOpen ? 'is-group-open-btn' : 'is-group-closed-btn'}`}
              onClick={() => handlerHideGroup()}
            ></button>
          </div>
        </td>
        {new Array(allDaysInMonth).fill(0).map((_, day: number) => (
          <TeamCell key={day} dayString={formatDayInBinaryString(date, day + 1)} />
        ))}
        <td className="calendar-team__cell cell-gray"></td>
      </tr>
      {members.map(({ name: nameMember, vacations: arrayOfVacations }: IMember, day: number) => (
        <TeamMember
          key={day}
          date={date}
          allDaysInMonth={allDaysInMonth}
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

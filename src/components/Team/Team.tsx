import React, { useState } from 'react'

import TeamInfo from './TeamInfo'
import TeamCell from './TeamCell'
import Member from '../Member/Member'

import { THEMES } from '../../constant'
import { getAllDaysInMonth } from '../../utils/date'

import { ITeam } from '../../types/model/team'

interface ITeamComponent {
  date: Date
  team: ITeam
  themeIndex?: number
}

const Team: React.FC<ITeamComponent> = ({ team, date, themeIndex = 0 }) => {
  const mainTheme = THEMES[themeIndex % THEMES.length][0]
  const [isGroupOpen, setIsGrpupOpen] = useState(true)

  const handlerHideGroup = () => {
    setIsGrpupOpen(!isGroupOpen)
  }

  return (
    <>
      <tr
        className={`calendar-body__row calendar-table--indentation ${mainTheme} ${
          THEMES[themeIndex % THEMES.length][1]
        } ${isGroupOpen ? '' : 'is-group-closed'}`}
      >
        <td className="team">
          <TeamInfo date={date} {...team} />
        </td>
        {getAllDaysInMonth(date).map((date, index) => (
          <TeamCell key={index} date={date} />
        ))}

        <td className="calendar-body__cell cell-gray"></td>
      </tr>

      {team.members.map((member) => (
        <Member key={member.id} date={date} theme={mainTheme} isGroupOpen={isGroupOpen} {...member} />
      ))}
    </>
  )
}

export default Team
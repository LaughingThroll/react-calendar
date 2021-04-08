import React, { useState } from 'react'
import classnames from 'classnames'

import { useToggle } from '../../hooks'

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
  const { isOpen, toggleOpen } = useToggle(true)

  return (
    <>
      <tr
        className={`calendar-body__row calendar-table--indentation ${mainTheme} ${
          THEMES[themeIndex % THEMES.length][1]
        } ${classnames({ 'calendar-table--closed': !isOpen })} `}
      >
        <td className="team">
          <TeamInfo date={date} {...team} isOpen={isOpen} toggleOpen={toggleOpen} />
        </td>
        {getAllDaysInMonth(date).map((date, index) => (
          <TeamCell key={index} date={date} />
        ))}

        <td className="calendar-body__cell cell-gray"></td>
      </tr>

      {isOpen && team.members.map((member) => <Member key={member.id} date={date} theme={mainTheme} {...member} />)}
    </>
  )
}

export default Team

import React from 'react'
import classnames from 'classnames'

import { Cell } from '../common'
import TeamInfo from './TeamInfo'
import Member from '../Member/Member'

import { useToggle } from '../../hooks'

import { THEMES } from '../../theme'
import { getAllDaysInMonth } from '../../utils/date'

import { Team } from '../../types/model/team'

export interface TeamProps {
  date: Date
  team: Team
  themeIndex?: number
  classNames?: string[]
}

const TeamComponent: React.FC<TeamProps> = ({ team, date, themeIndex = 0, classNames = [] }) => {
  const mainTheme = THEMES[themeIndex % THEMES.length][0]
  const { isOpen, toggleOpen } = useToggle(true)

  return (
    <>
      <tr
        className={`
        calendar-body__row 
        calendar-table--indentation 
        ${mainTheme} 
        ${THEMES[themeIndex % THEMES.length][1]} 
        ${classnames({ 'calendar-table--closed': !isOpen })} `}
      >
        <td className="team">
          <TeamInfo date={date} {...team} isOpen={isOpen} toggleOpen={toggleOpen} />
        </td>
        {getAllDaysInMonth(date).map((date, index) => (
          <Cell key={index} cellDate={date} classNames={['calendar-body__cell']}></Cell>
        ))}

        <td className="calendar-body__cell cell-gray"></td>
      </tr>

      {isOpen && team.members.map((member) => <Member key={member.id} date={date} theme={mainTheme} {...member} />)}
    </>
  )
}

export default React.memo(TeamComponent)

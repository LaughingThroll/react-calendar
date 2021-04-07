import React from 'react'
import classnames from 'classnames'

import { useToggle } from '../../hooks'

import iconUsers from './../../assets/images/icons/users.svg'

import { ITeam } from '../../types/model/team'

interface ITeamInfo extends ITeam {
  date: Date
}

const TeamInfo: React.FC<ITeamInfo> = ({ date, name, members, percentageOfAbsent }) => {
  const { isOpen, changeOpen } = useToggle()

  const getPercentageOfAbsentCount = (percentageOfAbsent: number[], date: Date): number => {
    return date.getFullYear() === new Date().getFullYear() ? percentageOfAbsent[date.getMonth()] : 0
  }

  return (
    <div className="team-info">
      <span className="team-info__name">{name}</span>
      <div className="team-info__other">
        <div className="team-info__users users">
          <img className="users__svg" src={iconUsers} alt="" />
          <span className="users__count">{members.length}</span>
        </div>
        <div className="team-info__weekend-percent weekend-percent">
          {getPercentageOfAbsentCount(percentageOfAbsent, date)}%
        </div>
        <button
          className={classnames({
            'button-arrow-up': true,
            'is-group-open-btn': isOpen,
            'is-group-closed-btn': !isOpen,
          })}
          onClick={changeOpen}
        ></button>
      </div>
    </div>
  )
}

export default TeamInfo

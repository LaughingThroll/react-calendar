import React from 'react'
import classnames from 'classnames'

import styles from './teamInfo.module.scss'

import { CountUsers, WeekendPercents } from '../../common'

import { getPercentageOfAbsentCount } from '../../../utils/teams'

import { Team } from '../../../types/model/team'

export interface TeamInfoProps extends Team {
  date: Date
  isOpen?: boolean
  toggleOpen?: () => void
  classNames?: string[]
}

const { teamInfo, teamInfo__name, teamInfo__other, teamInfo__countUsers } = styles

const TeamInfo: React.FC<TeamInfoProps> = ({
  date,
  name,
  members,
  percentageOfAbsent,
  isOpen,
  toggleOpen,
  classNames = [],
}) => {
  return (
    <div className={[teamInfo, ...classNames].join(' ')}>
      <span className={teamInfo__name}>{name}</span>
      <div className={teamInfo__other}>
        <CountUsers countUsers={members.length} classNames={[teamInfo__countUsers]} />
        <WeekendPercents
          percent={getPercentageOfAbsentCount(percentageOfAbsent, date)}
          classNames={['teamInfo__weekendPercent']}
        />
        <button
          className={classnames({
            'button-arrow-up': true,
            'button-arrow-up--active': isOpen,
          })}
          onClick={toggleOpen}
        ></button>
      </div>
    </div>
  )
}

export default React.memo(TeamInfo)

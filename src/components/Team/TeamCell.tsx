import React from 'react'
import classnames from 'classnames'

import { isWeekend } from '../../utils/date/index'

interface ITeamCell {
  date: Date
}

const TeamCell: React.FC<ITeamCell> = ({ date }) => {
  return (
    <td
      className={classnames({
        'calendar-body__cell': true,
        'cell-gray': isWeekend(date),
      })}
    ></td>
  )
}

export default React.memo(TeamCell)

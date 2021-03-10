import React from "react"
import classnames from "classnames"

import { isWeekend } from "../../utils/vacations"

interface ITeamCell {
  date: Date
  isPaidCell?: boolean
  isUnPaidCell?: boolean
  isStartDay?: boolean
  isEndDay?: boolean
}

const TeamCell: React.FC<ITeamCell> = ({ date, isPaidCell, isUnPaidCell, isStartDay, isEndDay }) => {
  return (
    <td
      className={classnames({
        "calendar-body__cell": true,
        "cell-gray": isWeekend(date),
      })}
    >
      {(isPaidCell || isUnPaidCell) && (
        <div
          className={classnames({
            "cell-vacations": true,
            "cell-vacations--paid": isPaidCell,
            "cell-vacations--unpaid": isUnPaidCell,
            "cell-vacations--start-vac": isStartDay,
            "cell-vacations--end-vac": isEndDay,
            "cell-vacations--unpaid-start-vac": isUnPaidCell && isStartDay,
            "cell-vacations--unpaid-end-vac": isUnPaidCell && isEndDay,
          })}
        >
          Pd
        </div>
      )}
    </td>
  )
}

export default TeamCell

import React from "react"
import { IVacation } from "../../types/DB"
import { checkVacationsDate, isWeekend } from "../../utils/date"

interface ITeamCell {
  dayString: string
  vacations?: IVacation[]
  dateCell?: Date
}

const TeamCell: React.FC<ITeamCell> = ({ dayString, vacations, dateCell }) => {
  return (
    <td
      className={`calendar-team__cell 
      ${isWeekend(dayString) && "cell-gray"} 
      ${vacations && dateCell && checkVacationsDate(vacations, dateCell) && "cell-vacations"}
      `}
    ></td>
  )
}

export default TeamCell

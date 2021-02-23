import React from "react"
import { IVacation } from "../../types/DB"
import { checkVacationsDate } from "../../utils/vacationsDate"

interface ITeamCell {
  dayString: string
  vacations?: Array<IVacation>
  date?: Date
  day?: number
}

const TeamCell: React.FC<ITeamCell> = ({ dayString, vacations, day, date }) => {
  let isVacation
  if (vacations !== undefined && date !== undefined && day !== undefined) {
    let dateForCell = new Date(date.getFullYear(), date.getMonth(), day + 1)
    isVacation = checkVacationsDate(vacations, dateForCell)
  }

  return (
    <td
      className={`calendar-team__cell ${dayString === "Sa" || dayString === "Su" ? "cell-gray" : ""} ${
        isVacation ? "cell-vacations" : ""
      }`}
    ></td>
  )
}

export default TeamCell

import { Vacation } from '../../../types/model/vacation'
import { getDetailedVacation } from '../getDetailedVacation'

export const getFilteredVacationsByMonth = (
  vacations: Vacation[],
  cellDate: Date,
  separator: string = '-'
): Vacation[] => {
  return vacations.filter((vacation) => {
    const { startMonth, endMonth, startYear, endYear } = getDetailedVacation(vacation, separator)
    const currentMonth = cellDate.getMonth() + 1
    const currentYear = cellDate.getFullYear()

    return (
      (currentMonth === startMonth || currentMonth === endMonth) &&
      (currentYear === startYear || currentYear === endYear)
    )
  })
}

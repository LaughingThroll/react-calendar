import { IVacation } from '../../../types/model/vacation'
import { getDetailedVacation } from '../getDetailedVacation'

export const getFilteredVacationsByMonth = (
  vacations: IVacation[],
  cellDate: Date,
  separator: string = '-'
): IVacation[] => {
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

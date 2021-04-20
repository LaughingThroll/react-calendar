import { getFilteredVacationsByMonth } from '../getFilteredVacationsByMonth'
import { getDetailedVacation } from '../getDetailedVacation'
import { IVacation } from '../../../types/model/vacation'

const getSumVacationsDaysByDay = (vacations: IVacation[], cellDate: Date, separator: string = '.'): number => {
  const filteredVacations = getFilteredVacationsByMonth(vacations, cellDate)

  return filteredVacations.reduce((acc, vacation) => {
    const { startDay, endDay } = getDetailedVacation(vacation, separator)
    return (acc += +(cellDate.getDate() >= startDay && cellDate.getDate() <= endDay))
  }, 0)
}

export default getSumVacationsDaysByDay

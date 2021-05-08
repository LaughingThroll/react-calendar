import { getFilteredVacationsByMonth } from '../getFilteredVacationsByMonth'
import { getDetailedVacation } from '../getDetailedVacation'
import { Vacation } from '../../../types/model/vacation'

const getSumVacationsDaysByDay = (vacations: Vacation[], cellDate: Date, separator: string = '-'): number => {
  const filteredVacations = getFilteredVacationsByMonth(vacations, cellDate)

  return filteredVacations.reduce((acc, vacation) => {
    const { startDay, endDay } = getDetailedVacation(vacation, separator)
    return (acc += +(cellDate.getDate() >= startDay && cellDate.getDate() <= endDay))
  }, 0)
}

export default getSumVacationsDaysByDay

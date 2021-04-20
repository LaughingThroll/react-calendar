import { getFilteredVacationsByMonth } from '../getFilteredVacationsByMonth'
import { getCountDays, reverseDate } from '../../date'
import { IVacation } from '../../../types/model/vacation'

const getSumVacationsDaysByMonth = (vacations: IVacation[], cellDate: Date): number => {
  const filteredArray = getFilteredVacationsByMonth(vacations, cellDate)
  return filteredArray.reduce((acc, vacation) => {
    return (acc += getCountDays(reverseDate(vacation.startDate), reverseDate(vacation.endDate)) + 1)
  }, 0)
}

export default getSumVacationsDaysByMonth

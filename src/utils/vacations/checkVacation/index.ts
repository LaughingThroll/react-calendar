import { normalizeDate } from '../../date'
import { VacationDate } from '../../../types/model/vacation'

const checkVacation = (cellDate: Date, { startDate, endDate }: VacationDate): boolean => {
  return cellDate >= new Date(normalizeDate(startDate)) && cellDate <= new Date(normalizeDate(endDate))
}

export default checkVacation

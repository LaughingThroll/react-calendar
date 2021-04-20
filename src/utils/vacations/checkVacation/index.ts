import { normalizeDate } from '../../date'
import { IVacationDate } from '../../../types/model/vacation'

const checkVacation = (cellDate: Date, { startDate, endDate }: IVacationDate): boolean => {
  return cellDate >= new Date(normalizeDate(startDate)) && cellDate <= new Date(normalizeDate(endDate))
}

export default checkVacation

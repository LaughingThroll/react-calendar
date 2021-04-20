import { reverseDate, normalizeDate } from '../../date'
import { IVacationDate } from '../../../types/model/vacation'

const checkVacation = (cellDate: Date, { startDate, endDate }: IVacationDate, separator: string = '.'): boolean => {
  return (
    cellDate >= new Date(normalizeDate(reverseDate(startDate, separator))) &&
    cellDate <= new Date(normalizeDate(reverseDate(endDate, separator)))
  )
}

export default checkVacation

import { isEqualDate } from './../../date'
import { IVacation } from '../../../types/model/vacation'

const isLastDay = (vacations: IVacation[], date: Date, separator: string = '-'): boolean => {
  return vacations.map(({ endDate }) => isEqualDate(date, endDate.split(separator))).some(Boolean)
}

export default isLastDay

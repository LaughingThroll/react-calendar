import { isEqualDate } from './../../date'
import { Vacation } from '../../../types/model/vacation'

const isLastDay = (vacations: Vacation[], date: Date, separator: string = '-'): boolean => {
  return vacations.map(({ endDate }) => isEqualDate(date, endDate.split(separator))).some(Boolean)
}

export default isLastDay

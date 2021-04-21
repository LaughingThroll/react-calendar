import { isEqualDate } from '../../date'
import { Vacation } from '../../../types/model/vacation'

const isFirstDay = (vacations: Vacation[], date: Date, separator: string = '-'): boolean => {
  return vacations.map(({ startDate }) => isEqualDate(date, startDate.split(separator))).some(Boolean)
}

export default isFirstDay

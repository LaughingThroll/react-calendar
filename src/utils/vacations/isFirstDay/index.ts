import { isEqualDate } from '../../date'
import { IVacation } from '../../../types/model/vacation'

const isFirstDay = (vacations: IVacation[], date: Date, separator: string = '-'): boolean => {
  return vacations.map(({ startDate }) => isEqualDate(date, startDate.split(separator))).some(Boolean)
}

export default isFirstDay

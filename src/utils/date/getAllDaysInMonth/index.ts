import { createArrayFromNumber } from '../../forArrays/index'
import lastDayInMonth from '../lastDayInMonth'

const getAllDaysInMonth = (date: Date): Date[] => {
  return createArrayFromNumber(lastDayInMonth(date)).map(
    (day: number) => new Date(new Date(date.getFullYear(), date.getMonth(), day))
  )
}

export default getAllDaysInMonth

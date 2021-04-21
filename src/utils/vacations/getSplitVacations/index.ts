import { getBinaryNumber } from '../../getBinaryNumber'
import { getDetailedVacation } from '../getDetailedVacation'
import { lastDayInMonth } from '../../date'

import { Vacation, vacationUnion } from '../../../types/model/vacation'

interface SplitedFullMonthArgs {
  month: number
  endYear: number
  type: vacationUnion
  lastDay: number
}

export const getSplitedVacation = (vacation: Vacation, lastDay: number, separator: string = '-'): Vacation[] => {
  const { startDate, endDate, type } = vacation
  const { startMonth, endMonth, startYear, endYear } = getDetailedVacation(vacation, separator)
  return [
    {
      startDate,
      endDate: [startYear, getBinaryNumber(startMonth), lastDay].join(separator),
      type,
    },
    {
      startDate: [endYear, getBinaryNumber(endMonth), '01'].join(separator),
      endDate,
      type,
    },
  ]
}

export const getSplitedFullMonth = (
  { month, endYear, type, lastDay }: SplitedFullMonthArgs,
  separator: string = '-'
): Vacation => ({
  startDate: [endYear, getBinaryNumber(month), '01'].join(separator),
  endDate: [endYear, getBinaryNumber(month), lastDay].join(separator),
  type,
})

export const getIntermediatesSplitVacation = (
  vacation: Vacation,
  lastDay: number,
  separator: string = '-'
): Vacation[] => {
  let { startDay, startMonth, endMonth, startYear, endYear, type } = getDetailedVacation(vacation, separator)
  const arrVacations = getSplitedVacation(vacation, lastDay)

  while (startMonth !== endMonth - 1) {
    const lastDayForCurrentMonth = lastDayInMonth(new Date(startYear, startMonth, startDay))
    startMonth += 1
    arrVacations.push(getSplitedFullMonth({ month: startMonth, lastDay: lastDayForCurrentMonth, endYear, type }, '-'))
  }

  return arrVacations
}

const getSplitVacations = (vacations: Vacation[], lastDay: number, separator: string = '-'): Vacation[] => {
  return vacations.flatMap((vacation) => {
    const { endMonth, startMonth } = getDetailedVacation(vacation, separator)
    const diff = endMonth - startMonth

    if (diff === 1) return getSplitedVacation(vacation, lastDay, separator)

    if (diff > 1) return getIntermediatesSplitVacation(vacation, lastDay, separator)

    return vacation
  })
}

export default getSplitVacations

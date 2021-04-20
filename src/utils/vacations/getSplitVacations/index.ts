import { getBinaryNumber } from '../../getBinaryNumber'
import { getDetailedVacation } from '../getDetailedVacation'
import { lastDayInMonth } from '../../date'

import { IVacation, vacationUnion } from '../../../types/model/vacation'

interface SplitedFullMonthArgs {
  month: number
  endYear: number
  type: vacationUnion
  lastDay: number
}

export const getSplitedVacation = (vacation: IVacation, lastDay: number, separator: string = '.'): IVacation[] => {
  const { startDate, endDate, type } = vacation
  const { startMonth, endMonth, startYear, endYear } = getDetailedVacation(vacation, separator)
  return [
    {
      startDate,
      endDate: [lastDay, getBinaryNumber(startMonth), startYear].join(separator),
      type,
    },
    {
      startDate: ['01', getBinaryNumber(endMonth), endYear].join(separator),
      endDate,
      type,
    },
  ]
}

export const getSplitedFullMonth = (
  { month, endYear, type, lastDay }: SplitedFullMonthArgs,
  separator: string = '.'
): IVacation => ({
  startDate: ['01', getBinaryNumber(month), endYear].join(separator),
  endDate: [lastDay, getBinaryNumber(month), endYear].join(separator),
  type,
})

export const getIntermediatesSplitVacation = (
  vacation: IVacation,
  lastDay: number,
  separator: string = '.'
): IVacation[] => {
  let { startDay, startMonth, endMonth, startYear, endYear, type } = getDetailedVacation(vacation, separator)
  const arrVacations = getSplitedVacation(vacation, lastDay)

  while (startMonth !== endMonth - 1) {
    const lastDayForCurrentMonth = lastDayInMonth(new Date(startYear, startMonth, startDay))
    startMonth += 1
    arrVacations.push(getSplitedFullMonth({ month: startMonth, lastDay: lastDayForCurrentMonth, endYear, type }, '.'))
  }

  return arrVacations
}

const getSplitVacations = (vacations: IVacation[], lastDay: number, separator: string = '.'): IVacation[] => {
  return vacations.flatMap((vacation) => {
    const { endMonth, startMonth } = getDetailedVacation(vacation, separator)
    const diff = endMonth - startMonth

    if (diff === 1) return getSplitedVacation(vacation, lastDay, separator)

    if (diff > 1) return getIntermediatesSplitVacation(vacation, lastDay, separator)

    return vacation
  })
}

export default getSplitVacations

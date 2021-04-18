import { reverseDate, normalizeUTCDate, isEqualDate } from './date'

import { EVacationType, IVacation, IVacationDate } from '../types/model/vacation'

const checkVacation = (cellDate: Date, { startDate, endDate }: IVacationDate, separator: string = '.'): boolean => {
  return (
    cellDate >= new Date(normalizeUTCDate(reverseDate(startDate, separator))) &&
    cellDate <= new Date(normalizeUTCDate(reverseDate(endDate, separator)))
  )
}

const getBinaryNumber = (number: number): string => {
  return number < 10 ? `0${number}` : number.toString()
}

const getSplitedVacation = (vacation: IVacation, lastDay: number, separator: string = '.'): IVacation[] => {
  const { startDate, endDate, type } = vacation
  const [, startMonth, startYear] = startDate.split(separator).map(Number)
  const [, endMonth, endYear] = endDate.split(separator).map(Number)

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

export const getSplitVacations = (vacations: IVacation[], lastDay: number, separator: string = '.'): IVacation[] => {
  return vacations.flatMap((vacation) => {
    const { startDate, endDate, type } = vacation
    let [, startMonth] = startDate.split(separator).map(Number)
    const [, endMonth, endYear] = endDate.split(separator).map(Number)
    const diff = endMonth - startMonth

    if (diff === 1) return getSplitedVacation(vacation, lastDay)

    if (diff > 1) {
      const arrVacations = getSplitedVacation(vacation, lastDay)
      const getSplitedFullMonth = (month: number): IVacation => ({
        startDate: ['01', getBinaryNumber(month), endYear].join(separator),
        endDate: [lastDay, getBinaryNumber(month), endYear].join(separator),
        type,
      })

      while (startMonth !== endMonth - 1) {
        startMonth += 1
        arrVacations.push(getSplitedFullMonth(startMonth))
      }
      return arrVacations
    }
    return vacation
  })
}

export const getExsistingTypeVacation = (
  vacations: IVacation[],
  cellDate: Date,
  type: EVacationType.PAID | EVacationType.UN_PAID = EVacationType.PAID
): boolean => {
  const arr = vacations.map(({ startDate, endDate, type }) =>
    checkVacation(cellDate, { startDate, endDate }) ? type : null
  )
  return arr.some((el) => el === type)
}

// TODO: need think up new name and combine this function

export const isFirstDay = (vacations: IVacation[], date: Date, separator: string = '.'): boolean => {
  return vacations.map(({ startDate }) => isEqualDate(date, startDate.split(separator))).some(Boolean)
}

export const isLastDay = (vacations: IVacation[], date: Date, separator: string = '.'): boolean => {
  return vacations.map(({ endDate }) => isEqualDate(date, endDate.split(separator))).some(Boolean)
}

export const getDaysInVacation = ({ startDate, endDate }: IVacation, separator: string = '.') => {
  const [startDay] = startDate.split(separator).map(Number)
  const [endDay] = endDate.split(separator).map(Number)
  return endDay - startDay + 1
}

const getFilteredVacationsByMonth = (vacations: IVacation[], cellDate: Date, separator: string = '.'): IVacation[] => {
  return vacations.filter(({ startDate, endDate }) => {
    const [, startMonth, startYear] = startDate.split(separator).map(Number)
    const [, endMonth, endYear] = endDate.split(separator).map(Number)
    const currentMonth = cellDate.getMonth() + 1
    const currentYear = cellDate.getFullYear()
    return (
      (currentMonth === startMonth || currentMonth === endMonth) &&
      (currentYear === startYear || currentYear === endYear)
    )
  })
}

export const getSumVacationsDaysByMonth = (vacations: IVacation[], cellDate: Date): number => {
  const filteredArray = getFilteredVacationsByMonth(vacations, cellDate)
  return filteredArray.reduce((acc, vacation) => (acc += getDaysInVacation(vacation)), 0)
}

export const getSumVacationsDaysByDay = (vacations: IVacation[], cellDate: Date, separator: string = '.'): number => {
  const filteredVacations = getFilteredVacationsByMonth(vacations, cellDate)

  return filteredVacations.reduce((acc, { startDate, endDate }) => {
    const [startDay] = startDate.split(separator).map(Number)
    const [endDay] = endDate.split(separator).map(Number)
    return (acc += +(cellDate.getDate() >= startDay && cellDate.getDate() <= endDay))
  }, 0)
}

export const vacationIncludesVacation = ({ startDate, endDate }: IVacationDate, vacation: IVacation): boolean => {
  const isOuterVacation =
    checkVacation(new Date(normalizeUTCDate(reverseDate(vacation.startDate))), { startDate, endDate }) ||
    checkVacation(new Date(normalizeUTCDate(reverseDate(vacation.endDate))), { startDate, endDate })

  const isInVacation =
    new Date(startDate) >= new Date(normalizeUTCDate(reverseDate(vacation.startDate))) &&
    new Date(endDate) <= new Date(normalizeUTCDate(reverseDate(vacation.endDate)))

  return isOuterVacation || isInVacation
}

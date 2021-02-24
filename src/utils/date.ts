import { IVacation } from "../types/DB"

export const daysInMonth = (date: Date): number => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

export const formatDayInBinaryString = (date: Date, day: number): string => {
  return new Date(date.getFullYear(), date.getMonth(), day)
    .toLocaleString("en-US", { weekday: "short" })
    .substring(-1, 2)
}

export const countDayFromTimeStamp = (timestamp: number): number => {
  const oneDay: number = 1000 * 60 * 60 * 24
  let startDay: number = 0
  for (let i = 0; i < timestamp; i += oneDay) startDay++
  return startDay
}

const formatDateinKebabCase = (date: Date): string => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0]

export const dateKebabFormat = (day: number): string => {
  return formatDateinKebabCase(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + day))
}

export const checkVacationsDate = (vacations: Array<IVacation>, currentCellDate: Date): boolean => {
  let result = false
  vacations.forEach((item) => {
    const startDateNumbers = item.startDate.split(".")
    const startDate = `${startDateNumbers[2]}/${startDateNumbers[1]}/${startDateNumbers[0]}`
    const endDateNumbers = item.endDate.split(".")
    const endDate = `${endDateNumbers[2]}/${endDateNumbers[1]}/${endDateNumbers[0]}`
    if (currentCellDate >= new Date(startDate) && currentCellDate <= new Date(endDate)) {
      result = true
    }
  })
  return result
}

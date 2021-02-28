import { IVacation } from "../types/DB"

export const daysInMonth = (date: Date): number => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

export const formatDayInBinaryString = (date: Date, day: number): string => {
  return new Date(date.getFullYear(), date.getMonth(), day)
    .toLocaleString("en-US", { weekday: "short" })
    .substring(-1, 2)
}

export const formatDate = (arr: string[], separator: string = "."): string => arr.reverse().join(separator)

export const countDayFromTimeStamp = (timestamp: number): number => {
  const oneDay: number = 1000 * 60 * 60 * 24
  let startDay: number = 0
  for (let i = 0; i < timestamp; i += oneDay) startDay++
  return startDay
}

const formatDateInKebabCase = (date: Date): string => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0]

export const dateKebabFormat = (day: number): string => {
  return formatDateInKebabCase(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + day))
}

export const checkVacationsDate = (vacations: IVacation[], cellDate: Date): boolean => {
  return vacations
    .map(({ startDate, endDate }) => {
      return (
        cellDate >= new Date(formatDate(startDate.split("."))) && cellDate <= new Date(formatDate(endDate.split(".")))
      )
    })
    .some(Boolean)
}

export const isWeekend = (day: string): boolean => day === "Sa" || day === "Su"

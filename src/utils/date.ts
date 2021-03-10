import { BACKEND_SEPARATOR } from "../constant"
import { createArrayFromNumber } from "./createArray"

const daysInMonth = (date: Date): number => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

export const createArrayWithDate = (date: Date): Date[] => {
  return createArrayFromNumber(daysInMonth(date)).map(
    (day) => new Date(new Date(date.getFullYear(), date.getMonth(), day)),
  )
}

export const formatDayInBinaryString = (date: Date): string => {
  return date.toLocaleString("en-US", { weekday: "short" }).substring(-1, 2)
}

export const formatDate = (arr: string[], separator: string = BACKEND_SEPARATOR): string =>
  arr.reverse().join(separator)

export const countDayFromTimeStamp = (timestamp: number): number => {
  const oneDay: number = 1000 * 60 * 60 * 24
  let startDay: number = 0
  for (let i = 0; i <= timestamp; i += oneDay) startDay++
  return startDay
}

export const formatDateInKebabCase = (date: Date): string => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0]

export const dateKebabFormat = (day: number): string => {
  return formatDateInKebabCase(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + day))
}

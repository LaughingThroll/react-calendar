import { formatDate, formatDateInKebabCase, countDayFromTimeStamp } from "./date"
import { BACKEND_SEPARATOR } from "../constant"
import { IVacation, TVacation } from "../types/DB"

export const checkVacation = (
  cellDate: Date,
  startDate: string,
  endDate: string,
  separator: string = BACKEND_SEPARATOR,
): boolean =>
  cellDate >= new Date(formatDate(startDate.split(separator))) &&
  cellDate <= new Date(formatDate(endDate.split(separator)))

export const isWeekend = (date: Date): boolean => date.getDay() === 6 || date.getDay() === 0

export const isFirstOrLastDay = (vacations: IVacation[], date: Date, typeDay: "start" | "end" = "start") => {
  return vacations
    .map((el) => {
      const dateArr = el[typeDay + "Date"].split(".")
      return date.getDate() === +dateArr[0] && date.getMonth() + 1 === +dateArr[1]
    })
    .some(Boolean)
}

export const exsistTypeVacation = (vacations: IVacation[], cellDate: Date, type: TVacation = "Paid"): boolean => {
  return vacations
    .map(({ startDate, endDate, type }) => (checkVacation(cellDate, startDate, endDate) ? type : null))
    .some((el) => el === type)
}

export const splitVacations = (
  vacations: IVacation[],
  lastDay: number,
  separator: string = BACKEND_SEPARATOR,
): IVacation[] => {
  return vacations.flatMap((vacation) => {
    const { startDate, endDate, type } = vacation
    const startDateArr = startDate.split(separator)
    const endDateArr = endDate.split(separator)

    if (+startDateArr[1] !== +endDateArr[1]) {
      return [
        {
          startDate,
          endDate: `${lastDay}${separator}${startDateArr[1]}${separator}${startDateArr[2]}`,
          type,
        },
        {
          startDate: `01${separator}${endDateArr[1]}${separator}${endDateArr[2]}`,
          endDate,
          type,
        },
      ]
    }
    return vacation
  })
}

type TFilterForSummaryDays = "horizontal" | "vertical"

const filterDate = (
  vacations: IVacation[],
  cellDate: Date,
  filter: TFilterForSummaryDays = "horizontal",
  separator: string = BACKEND_SEPARATOR,
): IVacation[] => {
  return vacations.filter(({ startDate }) => {
    const startDateArr = startDate.split(separator)
    const currentDateArr = formatDateInKebabCase(cellDate).split("-")
    if (filter === "horizontal") {
      return +startDateArr[1] === +currentDateArr[1] && +startDateArr[2] === +currentDateArr[0]
    }
    if (filter === "vertical") {
      return +startDateArr[0] === +currentDateArr[0] && +startDateArr[2] === +currentDateArr[0]
    }
  })
}

export const summDays = (
  vacations: IVacation[],
  cellDate: Date,
  filter: TFilterForSummaryDays = "horizontal",
  separator: string = BACKEND_SEPARATOR,
): number => {
  const filteredArray = filterDate(vacations, cellDate, filter)
  return filteredArray.reduce((acc, { startDate, endDate }) => {
    const diff = Date.parse(formatDate(endDate.split(separator))) - Date.parse(formatDate(startDate.split(separator)))
    return (acc += countDayFromTimeStamp(diff))
  }, 0)
}

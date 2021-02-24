import { IVacation } from "../types/DB"

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

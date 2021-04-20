import { IVacation } from './../../../types/model/vacation'

export const getDetailedVacation = (vacation: IVacation, separator: string = '-') => {
  const { startDate, endDate, type } = vacation
  const [startYear, startMonth, startDay] = startDate.split(separator).map(Number)
  const [endYear, endMonth, endDay] = endDate.split(separator).map(Number)
  return { startDay, startMonth, startYear, endDay, endMonth, endYear, type }
}

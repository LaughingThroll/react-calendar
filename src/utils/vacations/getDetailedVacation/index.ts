import { IVacation } from './../../../types/model/vacation'

export const getDetailedVacation = (vacation: IVacation, separator: string = '.') => {
  const { startDate, endDate, type } = vacation
  const [startDay, startMonth, startYear] = startDate.split(separator).map(Number)
  const [endDay, endMonth, endYear] = endDate.split(separator).map(Number)
  return { startDay, startMonth, startYear, endDay, endMonth, endYear, type }
}

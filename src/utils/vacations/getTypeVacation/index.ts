import checkVacation from '../checkVacation'

import { Vacation, VacationTypes, vacationUnion } from '../../../types/model/vacation'

const getTypeVacation = (vacations: Vacation[], cellDate: Date, type: vacationUnion = VacationTypes.PAID): boolean => {
  const arr = vacations.map(({ startDate, endDate, type }) =>
    checkVacation(cellDate, { startDate, endDate }) ? type : null
  )
  return arr.some((el) => el === type)
}

export default getTypeVacation

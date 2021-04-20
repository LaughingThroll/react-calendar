import checkVacation from '../checkVacation'

import { IVacation, VacationType, vacationUnion } from '../../../types/model/vacation'

const getTypeVacation = (vacations: IVacation[], cellDate: Date, type: vacationUnion = VacationType.PAID): boolean => {
  const arr = vacations.map(({ startDate, endDate, type }) =>
    checkVacation(cellDate, { startDate, endDate }) ? type : null
  )
  return arr.some((el) => el === type)
}

export default getTypeVacation

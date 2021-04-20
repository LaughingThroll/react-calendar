import { normalizeDate } from '../../date'
import checkVacation from '../checkVacation'

import { IVacationDate, IVacation } from '../../../types/model/vacation'

const vacationIncludesVacation = ({ startDate, endDate }: IVacationDate, vacation: IVacation): boolean => {
  const isOuterVacation =
    checkVacation(new Date(normalizeDate(vacation.startDate)), { startDate, endDate }) ||
    checkVacation(new Date(normalizeDate(vacation.endDate)), { startDate, endDate })

  const isInVacation =
    new Date(startDate) >= new Date(normalizeDate(vacation.startDate)) &&
    new Date(endDate) <= new Date(normalizeDate(vacation.endDate))

  return isOuterVacation || isInVacation
}

export default vacationIncludesVacation

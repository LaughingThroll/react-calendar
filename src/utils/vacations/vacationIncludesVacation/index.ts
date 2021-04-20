import { normalizeDate, reverseDate } from '../../date'
import checkVacation from '../checkVacation'

import { IVacationDate, IVacation } from '../../../types/model/vacation'

const vacationIncludesVacation = ({ startDate, endDate }: IVacationDate, vacation: IVacation): boolean => {
  const isOuterVacation =
    checkVacation(new Date(normalizeDate(reverseDate(vacation.startDate))), { startDate, endDate }) ||
    checkVacation(new Date(normalizeDate(reverseDate(vacation.endDate))), { startDate, endDate })

  const isInVacation =
    new Date(startDate) >= new Date(normalizeDate(reverseDate(vacation.startDate))) &&
    new Date(endDate) <= new Date(normalizeDate(reverseDate(vacation.endDate)))

  return isOuterVacation || isInVacation
}

export default vacationIncludesVacation

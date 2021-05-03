import vacationIncludesVacation from './../vacationIncludesVacation'
import { Vacation, VacationDate } from '../../../types/model/vacation'

const hasExistVacation = (vacations: Vacation[], currentVacation: VacationDate): boolean => {
  return vacations.map((vacation) => vacationIncludesVacation(currentVacation, vacation)).some(Boolean)
}

export default hasExistVacation

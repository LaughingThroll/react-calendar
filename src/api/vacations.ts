import { MAIN_URL } from './URLS'
import { makeRequest } from '../utils/'
import { reverseDate } from '../utils/date'
import { VacationDTO, Vacation } from '../types/model/vacation'
import { FirebaseResponse } from '../types/model/firebase'

export const patchVacation = (submitVacation: VacationDTO): Promise<Vacation> => {
  const { currentTeamID, currentMemberID, ...vacation } = submitVacation

  const preparedVacation = {
    [Date.now()]: {
      startDate: reverseDate(vacation.startDate, '-', '.'),
      endDate: reverseDate(vacation.endDate, '-', '.'),
      type: vacation.type,
    },
  }

  return makeRequest<FirebaseResponse<Vacation>>(
    `${MAIN_URL}/teams/${currentTeamID}/members/${currentMemberID}/vacations.json`,
    {
      method: 'PATCH',
      body: JSON.stringify(preparedVacation),
    }
  ).then((vacation) => Object.values(vacation)[0])
}

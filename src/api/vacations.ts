import { MAIN_URL } from './URLS'
import { makeRequest } from '../utils/'
import { VacationDTO, Vacation } from '../types/model/vacation'
import { FirebaseResponse } from '../types/model/firebase'

export const patchVacation = (submitVacation: VacationDTO): Promise<Vacation> => {
  const { currentTeamID, currentMemberID, ...vacation } = submitVacation
  return makeRequest<FirebaseResponse<Vacation>>(
    `${MAIN_URL}/teams/${currentTeamID}/members/${currentMemberID}/vacations.json`,
    { method: 'PATCH', body: JSON.stringify({ [Date.now()]: vacation }) }
  ).then((vacation) => Object.values(vacation)[0])
}

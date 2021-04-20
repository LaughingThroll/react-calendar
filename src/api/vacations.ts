import { MAIN_URL } from './URLS'
import { makeRequest } from '../utils'
import { ISubmitVacation, IVacation } from '../types/model/vacation'
import { IFirebaseResponse } from '../types/model/firebase'

export const patchVacation = (submitVacation: ISubmitVacation): Promise<IVacation> => {
  const { currentTeamID, currentMemberID, ...vacation } = submitVacation
  return makeRequest<IFirebaseResponse<IVacation>>(
    `${MAIN_URL}/teams/${currentTeamID}/members/${currentMemberID}/vacations.json`,
    { method: 'PATCH', body: JSON.stringify({ [Date.now()]: vacation }) }
  ).then((vacation) => Object.values(vacation)[0])
}

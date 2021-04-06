import { ITeam, ITeamResponse } from './team'
import { IFirebaseResponse } from './firebase'

export interface ITeams {
  teams: ITeam[]
}

export interface ITeamsResponse {
  teams: IFirebaseResponse<ITeamResponse>
}

import { Team, TeamResponse } from './team'
import { FirebaseResponse } from './firebase'

export interface Teams {
  teams: Team[]
}

export interface TeamsResponse {
  teams: FirebaseResponse<TeamResponse>
}

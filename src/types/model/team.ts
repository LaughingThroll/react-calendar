import { IMember } from './member'
import { IFirebaseResponse } from './firebase'

export interface ITeamMain {
  name: string
  percentageOfAbsent: number[]
  id: string
}

export interface ITeam extends ITeamMain {
  members: IMember[]
}

export interface ITeamResponse extends ITeamMain {
  members: IFirebaseResponse<IMember>
}

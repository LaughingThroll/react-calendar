import { Member } from './member'
import { FirebaseResponse } from './firebase'

export interface TeamMain {
  name: string
  percentageOfAbsent: number[]
  id: string
}

export interface Team extends TeamMain {
  members: Member[]
}

export interface TeamResponse extends TeamMain {
  members: FirebaseResponse<Member>
}

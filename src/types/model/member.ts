import { Vacation } from './vacation'
import { FirebaseResponse } from './firebase'
import { ID } from '../utilsTypes'

interface MemberMain {
  name: string
  id: ID
}

export interface Member extends MemberMain {
  vacations: Vacation[]
}

export interface MemberResponse extends MemberMain {
  vacations: FirebaseResponse<Vacation>
}

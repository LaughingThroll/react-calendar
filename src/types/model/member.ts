import { IVacation } from './vacation'
import { IFirebaseResponse } from './firebase'
import { ID } from '../utilsTypes'

interface IMemberMain {
  name: string
  id: ID
}

export interface IMember extends IMemberMain {
  vacations: IVacation[]
}

export interface IMemberResponse extends IMemberMain {
  vacations: IFirebaseResponse<IVacation>
}

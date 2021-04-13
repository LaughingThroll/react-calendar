import { ID } from './../utilsTypes'

export enum EVacationType {
  PAID = 'Paid',
  UN_PAID = 'UnPaid',
}

export type TVacation = EVacationType.PAID | EVacationType.UN_PAID

export interface IVacationDate {
  startDate: string
  endDate: string
}

export interface IVacation extends IVacationDate {
  type: TVacation
}

export interface ISubmitVacation extends IVacation {
  currentTeamID: ID
  currentMemberID: ID
}

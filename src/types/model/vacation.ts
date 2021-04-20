import { ID } from './../utilsTypes'

export enum VacationType {
  PAID = 'Paid',
  UN_PAID = 'UnPaid',
}

export type vacationUnion = VacationType.PAID | VacationType.UN_PAID

export interface IVacationDate {
  startDate: string
  endDate: string
}

export interface IVacation extends IVacationDate {
  type: vacationUnion
}

export interface ISubmitVacation extends IVacation {
  currentTeamID: ID
  currentMemberID: ID
}

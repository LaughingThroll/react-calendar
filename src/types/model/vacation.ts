import { ID } from './../utilsTypes'

export enum VacationTypes {
  PAID = 'Paid',
  UN_PAID = 'UnPaid',
}

export type vacationUnion = VacationTypes.PAID | VacationTypes.UN_PAID

export interface VacationDate {
  startDate: string
  endDate: string
}

export interface Vacation extends VacationDate {
  type: vacationUnion
}

export interface VacationDTO extends Vacation {
  currentTeamID: ID
  currentMemberID: ID
}

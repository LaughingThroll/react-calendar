export enum EVacation {
  PAID = 'Paid',
  UN_PAID = 'UnPaid',
}

export type TVacation = EVacation.PAID | EVacation.UN_PAID

export interface IVacation {
  startDate: string
  endDate: string
  type: TVacation
}

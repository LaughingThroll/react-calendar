export type TVacation = "Paid" | "UnPaid"

export interface IVacation {
  startDate: string
  endDate: string
  type: TVacation
}

interface IMember {
  name: string
  vacations: IVacation[]
}

interface ITeam {
  name: string
  percentageOfAbsent: number[]
  members: IMember[]
}

export interface IDepartmentTeams {
  teams: ITeam[]
}

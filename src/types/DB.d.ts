type TVacation = "Paid" | "UnPaid"

interface IVacation {
  startDate: string
  endDate: string
  type: TVacation
}

interface IMember {
  name: string
  vacations: IVacation[]
}

export interface ITeam {
  name: string
  percentageOfAbsent: number[]
  members: IMember[]
  teamId: number
}

export interface IDepartmentTeams {
  teams: ITeam[]
}

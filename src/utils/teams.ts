import { ITeam } from '../types/model/team'

export const getPercentageOfAbsentCount = (team: ITeam, date: Date): number => {
  return date.getFullYear() === new Date().getFullYear() ? team.percentageOfAbsent[date.getMonth()] : 0
}

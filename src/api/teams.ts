import { MAIN_URL } from './URLS'
import { makeRequest } from '../utils'

import { IMember } from '../types/model/member'
import { ITeam } from '../types/model/team'
import { ITeamsResponse } from '../types/model/teams'

export const getTeams = (): Promise<ITeam[]> => {
  return (
    makeRequest<ITeamsResponse>(`${MAIN_URL}/teams.json`)
      //  Formatting to Front
      .then((teams) => Object.values(teams))
      .then((teams) => {
        teams.forEach((team: ITeam) => {
          team.members = Object.values(team.members)
          team.members.forEach((member: IMember) => {
            member.vacations = Object.values(member.vacations)
          })
        })
        return teams
      })
  )
}

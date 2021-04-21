import { MAIN_URL } from './URLS'
import { makeRequest } from '../utils'

import { Member } from '../types/model/member'
import { Team } from '../types/model/team'
import { TeamsResponse } from '../types/model/teams'
import { reverseDate } from '../utils/date'

export const getTeams = (): Promise<Team[]> => {
  return (
    makeRequest<TeamsResponse>(`${MAIN_URL}/teams.json`)
      //  Formatting to Front
      .then((teams) => Object.values(teams))
      .then((teams) => {
        teams.forEach((team: Team) => {
          team.members = Object.values(team.members)

          team.members.forEach((member: Member) => {
            member.vacations = Object.values(member.vacations).map(({ startDate, endDate, type }) => ({
              startDate: reverseDate(startDate),
              endDate: reverseDate(endDate),
              type,
            }))
          })
        })
        return teams
      })
  )
}

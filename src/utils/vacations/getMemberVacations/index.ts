import { Team } from '../../../types/model/team'
import { Vacation } from '../../../types/model/vacation'
import { ID } from '../../../types/utilsTypes'

const getMemberVacations = (teams: Team[], memberID: ID): Vacation[] | undefined => {
  return teams.flatMap(({ members }) => members).find(({ id }) => id === memberID)?.vacations
}

export default getMemberVacations

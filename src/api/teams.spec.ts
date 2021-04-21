import { teams } from '../__STUBS__/normalTeams'
import { Team } from '../types/model/team'

describe('async getTeams', () => {
  it('getTeams fake request', () => {
    const fakeFetchTeams: Promise<Team[]> = Promise.resolve().then(() => teams)

    return fakeFetchTeams.then((res) => {
      expect(res).toBe(teams)
    })
  })
})

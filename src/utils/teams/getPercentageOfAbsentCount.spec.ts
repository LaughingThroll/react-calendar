import { getPercentageOfAbsentCount } from './'
import teams from '../../__STUBS__/teams'
import { Team } from '../../types/model/team'

describe('utils/getPercentageOfAbsentCount', () => {
  let team: Team
  beforeEach(() => {
    team = teams[0]
  })

  it('args [teams[0], new Date(2021-05-19)] should return 1', () => {
    const date = new Date('2021-05-19')

    expect(getPercentageOfAbsentCount(team.percentageOfAbsent, date)).toBe(1)
  })

  it('args [teams[0], new Date(2021-04-19)] should return 0', () => {
    const date = new Date('2021-04-19')

    expect(getPercentageOfAbsentCount(team.percentageOfAbsent, date)).toBe(0)
  })

  it('args [teams[0], new Date(2022-04-19)] should return 0', () => {
    const date = new Date('2022-04-19')

    expect(getPercentageOfAbsentCount(team.percentageOfAbsent, date)).toBe(0)
  })
})

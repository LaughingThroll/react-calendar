import getMemberVacation from './'
import { normalTeams } from '../../../__STUBS__/normalTeams'
import { VacationTypes } from '../../../types/model/vacation'

describe('utils/getMembervacations', () => {
  it('input correct memberID should return vacations', () => {
    const answer = [
      {
        startDate: '2021-02-12',
        endDate: '2021-02-15',
        type: VacationTypes.PAID,
      },
      {
        startDate: '2021-04-23',
        endDate: '2021-04-29',
        type: VacationTypes.UN_PAID,
      },
      {
        startDate: '2021-04-14',
        endDate: '2021-04-21',
        type: VacationTypes.UN_PAID,
      },
      {
        startDate: '2021-04-01',
        endDate: '2021-04-08',
        type: VacationTypes.PAID,
      },
    ]

    expect(getMemberVacation(normalTeams, 'asdffegegege')).toEqual(answer)
  })

  it('input incorrect memberID should return undefined', () => {
    expect(getMemberVacation(normalTeams, 'asffegegege')).toBe(undefined)
  })
})

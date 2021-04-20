import { getFilteredVacationsByMonth } from './'
import vacations from '../../__STUBS__/vacations'
import { VacationType } from '../../../types/model/vacation'

describe('utils/getFilteredVaationsByMonth', () => {
  it('should retrun filtered vacations', () => {
    const date = new Date('2021-01-01')
    const answer = [
      {
        startDate: '2021-01-15',
        endDate: '2021-01-18',
        type: VacationType.PAID,
      },
      {
        startDate: '2021-01-28',
        endDate: '2021-02-01',
        type: VacationType.PAID,
      },
    ]

    expect(getFilteredVacationsByMonth(vacations, date)).toEqual(answer)
  })

  it('should return empty array with correctly date', () => {
    const date = new Date('2021-04-01')

    expect(getFilteredVacationsByMonth(vacations, date)).toEqual([])
  })

  it('attempt 1 should return filtered array with uncorrectly date', () => {
    // Input correctly date for good filtration 2021-01-01
    const date = new Date('01.01.2021')
    const answer = [
      {
        startDate: '2021-01-15',
        endDate: '2021-01-18',
        type: VacationType.PAID,
      },
      {
        startDate: '2021-01-28',
        endDate: '2021-02-01',
        type: VacationType.PAID,
      },
    ]

    expect(getFilteredVacationsByMonth(vacations, date)).toEqual(answer)
  })

  it('attempt 2 should return filtered array with uncorrectly date', () => {
    // Input correctly date for good filtration 2021-01-01
    const date = new Date('01.09.2021')
    const answer = [
      {
        startDate: '2021-01-15',
        endDate: '2021-01-18',
        type: VacationType.PAID,
      },
      {
        startDate: '2021-01-28',
        endDate: '2021-02-01',
        type: VacationType.PAID,
      },
    ]

    expect(getFilteredVacationsByMonth(vacations, date)).toEqual(answer)
  })

  it('attempt 3 should return filtered array with uncorrectly date', () => {
    // Input correctly date for good filtration 2021-01-01
    const date = new Date('01.09.2020')

    expect(getFilteredVacationsByMonth(vacations, date)).toEqual([])
  })
})

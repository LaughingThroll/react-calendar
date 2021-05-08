import { getDetailedVacation } from './'

import { Vacation, VacationTypes } from '../../../types/model/vacation'

describe('utils/getDetailedVacation', () => {
  it('get standard response', () => {
    const vacationStub: Vacation = { startDate: '2021-03-25', endDate: '2021-04-30', type: VacationTypes.PAID }
    const answer = {
      startDay: 25,
      endDay: 30,
      startMonth: 3,
      endMonth: 4,
      startYear: 2021,
      endYear: 2021,
      type: 'Paid',
    }

    expect(getDetailedVacation(vacationStub)).toEqual(answer)
  })
})

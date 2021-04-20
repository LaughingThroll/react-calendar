import { getDetailedVacation } from './'

import { IVacation, VacationType } from '../../../types/model/vacation'

describe('utils/getDetailedVacation', () => {
  it('get standard response', () => {
    const vacationStub: IVacation = { startDate: '25.03.2021', endDate: '30.04.2021', type: VacationType.PAID }
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

  it('get response with separator', () => {
    const vacationStub: IVacation = { startDate: '25-03-2021', endDate: '30-04-2021', type: VacationType.PAID }
    const answer = {
      startDay: 25,
      endDay: 30,
      startMonth: 3,
      endMonth: 4,
      startYear: 2021,
      endYear: 2021,
      type: 'Paid',
    }

    expect(getDetailedVacation(vacationStub, '-')).toEqual(answer)
  })
})

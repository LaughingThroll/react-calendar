import getSplitVacations, { getSplitedVacation, getSplitedFullMonth, getIntermediatesSplitVacation } from '.'
import { IVacation, VacationType } from '../../../types/model/vacation'
import vacations from '../../__STUBS__/vacations'

// this feature works in conjunction with getSplitVacation
describe('utils/getSplittedVacation', () => {
  const stubVacation: IVacation = {
    startDate: '2021-02-28',
    endDate: '2021-03-15',
    type: VacationType.PAID,
  }

  const answer = [
    { startDate: '2021-02-28', endDate: '2021-02-30', type: VacationType.PAID },
    { startDate: '2021-03-01', endDate: '2021-03-15', type: VacationType.PAID },
  ]

  it('get splitted vacation', () => {
    expect(getSplitedVacation(stubVacation, 30)).toEqual(answer)
  })
})

describe('utils/getSplitVacation', () => {
  it('should return normal vacation', () => {
    const vacationsStub = [
      {
        startDate: '2021-04-21',
        endDate: '2021-04-25',
        type: VacationType.PAID,
      },
    ]

    expect(getSplitVacations(vacationsStub, 30)).toEqual(vacationsStub)
  })

  it('should return splitted vacation', () => {
    const vacationsStub = [{ startDate: '2021-03-21', endDate: '2021-04-25', type: VacationType.PAID }]

    const answer = [
      { startDate: '2021-03-21', endDate: '2021-03-31', type: VacationType.PAID },
      { startDate: '2021-04-01', endDate: '2021-04-25', type: VacationType.PAID },
    ]

    expect(getSplitVacations(vacationsStub, 31)).toEqual(answer)
  })

  it('should return more splitted vacation', () => {
    const vacationsStub = [{ startDate: '2021-03-21', endDate: '2021-05-25', type: VacationType.PAID }]

    const answer = [
      { startDate: '2021-03-21', endDate: '2021-03-31', type: VacationType.PAID },
      { startDate: '2021-05-01', endDate: '2021-05-25', type: VacationType.PAID },
      { startDate: '2021-04-01', endDate: '2021-04-30', type: VacationType.PAID },
    ]

    expect(getSplitVacations(vacationsStub, 31)).toEqual(answer)
  })
})

describe('utils/getSplitedFullMonth', () => {
  const args = {
    month: 4,
    endYear: 2021,
    type: VacationType.PAID,
    lastDay: 30,
  }

  it('should return full month vacation', () => {
    const answer = { startDate: '2021-04-01', endDate: '2021-04-30', type: 'Paid' }

    expect(getSplitedFullMonth(args)).toEqual(answer)
  })

  it('should return full month vacation with separator', () => {
    const answer = { startDate: '2021.04.01', endDate: '2021.04.30', type: 'Paid' }

    expect(getSplitedFullMonth(args, '.')).toEqual(answer)
  })
})

describe('utils/getIntermediateSplitVacation', () => {
  it('should return more intermediate vacation', () => {
    const vacationStub = { startDate: '2021-03-21', endDate: '2021-05-25', type: VacationType.PAID }

    const answer = [
      { startDate: '2021-03-21', endDate: '2021-03-31', type: VacationType.PAID },
      { startDate: '2021-05-01', endDate: '2021-05-25', type: VacationType.PAID },
      { startDate: '2021-04-01', endDate: '2021-04-30', type: VacationType.PAID },
    ]

    expect(getIntermediatesSplitVacation(vacationStub, 31)).toEqual(answer)
  })

  //  I need more info by testing
  // it('should return more intermediate vacation with separator', () => {
  //   const vacationStub = { startDate: '21-03-2021', endDate: '25-05-2021', type: VacationType.PAID }

  //   const answer = [
  //     { startDate: '21.03.2021', endDate: '31.03.2021', type: VacationType.PAID },
  //     { startDate: '01.05.2021', endDate: '25.05.2021', type: VacationType.PAID },
  //     { startDate: '01.04.2021', endDate: '30.04.2021', type: VacationType.PAID }
  //   ]

  //   expect(getIntermediatesSplitVacation(vacationStub, 31, '-')).toEqual(answer)
  // })
})
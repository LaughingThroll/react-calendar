import getSumVacationsDaysByDay from './'
import getSplitVacations from '../getSplitVacations'
import { VacationType } from '../../../types/model/vacation'

describe('utils/getSumVacationsDaysByDay', () => {
  it('calculate number by day should return 2', () => {
    const date = new Date('2021-01-01')
    const vacations = [
      { startDate: '2021-01-01', endDate: '2021-01-03', type: VacationType.PAID },
      { startDate: '2021-01-01', endDate: '2021-01-06', type: VacationType.PAID },
      { startDate: '2021-01-03', endDate: '2021-01-12', type: VacationType.PAID },
    ]
    const splitvacation = getSplitVacations(vacations, 31)

    expect(getSumVacationsDaysByDay(splitvacation, date)).toBe(2)
  })

  it('calculate number by day should return 0', () => {
    const date = new Date('2021-02-01')
    const vacations = [
      { startDate: '2021-01-01', endDate: '2021-01-03', type: VacationType.PAID },
      { startDate: '2021-01-01', endDate: '2021-01-06', type: VacationType.PAID },
      { startDate: '2021-01-03', endDate: '2021-01-12', type: VacationType.PAID },
    ]
    const splitvacation = getSplitVacations(vacations, 28)

    expect(getSumVacationsDaysByDay(splitvacation, date)).toBe(0)
  })
})

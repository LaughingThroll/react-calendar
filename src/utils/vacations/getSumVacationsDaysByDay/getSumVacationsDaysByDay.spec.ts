import getSumVacationsDaysByDay from './'
import getSplitVacations from '../getSplitVacations'
import { VacationType } from '../../../types/model/vacation'

describe('utils/getSumVacationsDaysByDay', () => {
  it('calculate number by day should return 2', () => {
    const date = new Date('2021-01-01')
    const vacations = [
      { startDate: '01.01.2021', endDate: '03.01.2021', type: VacationType.PAID },
      { startDate: '01.01.2021', endDate: '06.01.2021', type: VacationType.PAID },
      { startDate: '03.01.2021', endDate: '12.01.2021', type: VacationType.PAID },
    ]
    const splitvacation = getSplitVacations(vacations, 31)

    expect(getSumVacationsDaysByDay(splitvacation, date)).toBe(2)
  })

  it('calculate number by day should return 0', () => {
    const date = new Date('2021-02-01')
    const vacations = [
      { startDate: '01.01.2021', endDate: '03.01.2021', type: VacationType.PAID },
      { startDate: '01.01.2021', endDate: '06.01.2021', type: VacationType.PAID },
      { startDate: '03.01.2021', endDate: '12.01.2021', type: VacationType.PAID },
    ]
    const splitvacation = getSplitVacations(vacations, 28)

    expect(getSumVacationsDaysByDay(splitvacation, date)).toBe(0)
  })
})

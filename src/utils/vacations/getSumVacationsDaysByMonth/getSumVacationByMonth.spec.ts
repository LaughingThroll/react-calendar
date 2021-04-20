import getSumVacationsDaysByMonth from './'
import getSplitVacations from '../getSplitVacations'
import vacations from '../../__STUBS__/vacations'

// It's fn maybe mistake but on interface all OK
describe('utils/getSumVacationDaysByMonth', () => {
  it('should return sum for 03 month', () => {
    const date = new Date('2021-03-04')
    const vacationsSplit = getSplitVacations(vacations, 31)
    expect(getSumVacationsDaysByMonth(vacationsSplit, date)).toBe(26)
  })
})

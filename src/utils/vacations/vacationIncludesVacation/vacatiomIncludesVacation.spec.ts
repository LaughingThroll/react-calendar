import vacationIncludesVacation from './'
import vacations from '../../__STUBS__/vacations'

describe('utils/vacationIncludesVacation', () => {
  const vacation = vacations[0]
  it('vacation started in other vacation but ended out other vacation should return true', () => {
    const vacationDate = {
      startDate: '2021-01-15',
      endDate: '2021-01-20',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it('vacation started and ended out other vacation but include in intermadiate should return true', () => {
    const vacationDate = {
      startDate: '2021-01-12',
      endDate: '2021-01-20',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it('vacation include startDate other vacation should return true', () => {
    const vacationDate = {
      startDate: '2021-01-15',
      endDate: '2021-01-18',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it('vacation started early then other vacation and include him should return true', () => {
    const vacationDate = {
      startDate: '2021-01-12',
      endDate: '2021-01-18',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it('vacation not include other vacation should return false', () => {
    const vacationDate = {
      startDate: '2021-01-01',
      endDate: '2021-01-12',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(false)
  })
})

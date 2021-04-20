import vacationIncludesVacation from './'
import vacations from '../../__STUBS__/vacations'

describe('utils/vacationIncludesVacation', () => {
  const vacation = vacations[0]
  it("args [{ startDate: '15.01.2021',endDate: '20.01.2021'}, vacation] should return true", () => {
    const vacationDate = {
      startDate: '15.01.2021',
      endDate: '20.01.2021',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it("args [{ startDate: '12.01.2021',endDate: '20.01.2021'}, vacation] should return true", () => {
    const vacationDate = {
      startDate: '12.01.2021',
      endDate: '20.01.2021',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it("args [{ startDate: '15.01.2021',endDate: '18.01.2021'}, vacation] should return true", () => {
    const vacationDate = {
      startDate: '15.01.2021',
      endDate: '18.01.2021',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it("args [{ startDate: '12.01.2021',endDate: '18.01.2021'}, vacation] should return true", () => {
    const vacationDate = {
      startDate: '12.01.2021',
      endDate: '18.01.2021',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(true)
  })

  it("args [{ startDate: '01.01.2021',endDate: '12.01.2021'}, vacation] should return false", () => {
    const vacationDate = {
      startDate: '01.01.2021',
      endDate: '12.01.2021',
    }

    expect(vacationIncludesVacation(vacationDate, vacation)).toBe(false)
  })
})

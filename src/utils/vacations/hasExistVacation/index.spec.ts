import hasExistVacation from './'
import vacations from '../../../__STUBS__/vacations'

describe('utils/hasExistVacation', () => {
  it('check vacation which no exist', () => {
    const vacationDate = { startDate: '2021-01-01', endDate: '2021-01-10' }

    expect(hasExistVacation(vacations, vacationDate)).toBe(false)
  })

  it('check vacation which exist', () => {
    const vacationDate = { startDate: '2021-01-15', endDate: '2021-01-20' }

    expect(hasExistVacation(vacations, vacationDate)).toBe(true)
  })
})

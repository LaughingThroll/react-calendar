import checkVacation from './'
import vacations from '../../__STUBS__/vacations'
import { IVacationDate } from '../../../types/model/vacation'

describe('utils/checkVacation standard', () => {
  let vacationDate: IVacationDate

  beforeEach(() => {
    vacationDate = { startDate: vacations[0].startDate, endDate: vacations[0].endDate }
  })

  it('args [new Date("2021-04-19"), vacationDate: {startDate, endDate}] should return false', () => {
    expect(checkVacation(new Date('2021-04-19'), vacationDate)).toBe(false)
  })

  it('args [new Date("2021-01-16"), vacationDate: {startDate, endDate}] should return true', () => {
    expect(checkVacation(new Date('2021-01-16'), vacationDate)).toBe(true)
  })

  it('args [new Date("2021-01-14"), vacationDate: {startDate, endDate}] should return false', () => {
    expect(checkVacation(new Date('2021-01-14'), vacationDate)).toBe(false)
  })
})

describe('utils/checkVacation with additional args', () => {
  const vacationDate = {
    startDate: '19-04-2021',
    endDate: '25-04-2021',
  }

  it('args [new Date("2021-04-19"), vacationDate: {startDate, endDate}] should return false', () => {
    expect(checkVacation(new Date('2021-04-19'), vacationDate)).toBe(false)
  })

  it('args [new Date("2021-04-19"), vacationDate: {startDate, endDate}, "-"] should return true', () => {
    expect(checkVacation(new Date('2021-04-19'), vacationDate, '-')).toBe(true)
  })
})

import getTypeVacation from './'
import vacations from '../../__STUBS__/vacations'
import { VacationType } from '../../../types/model/vacation'

describe('utils/getTypeVacation', () => {
  it('args [vacations, date] should return true', () => {
    const date = new Date('2021-01-15')
    expect(getTypeVacation(vacations, date)).toBe(true)
  })

  it('args [vacations, date, paid] should return true', () => {
    const date = new Date('2021-01-15')
    expect(getTypeVacation(vacations, date, VacationType.PAID)).toBe(true)
  })

  it('args [vacations, date, unpaid] should return true', () => {
    const date = new Date('2021-02-22')
    expect(getTypeVacation(vacations, date, VacationType.UN_PAID)).toBe(true)
  })

  it('args [vacations, date, paid] should return false', () => {
    const date = new Date('2021-04-19')
    expect(getTypeVacation(vacations, date, VacationType.PAID)).toBe(false)
  })

  it('args [vacations, date, unpaid] should return false', () => {
    const date = new Date('2021-01-15')
    expect(getTypeVacation(vacations, date, VacationType.UN_PAID)).toBe(false)
  })
})

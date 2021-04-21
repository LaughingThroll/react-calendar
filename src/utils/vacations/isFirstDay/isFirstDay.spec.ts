import isFirstDay from './'
import vacations from '../../../__STUBS__/vacations'

describe('utils/isFirstDay', () => {
  it('vacation is not started must be false', () => {
    const date = new Date('2021-01-01')

    expect(isFirstDay(vacations, date)).toBe(false)
  })

  it('vacation is started must be true', () => {
    const date = new Date('2021-01-15')

    expect(isFirstDay(vacations, date)).toBe(true)
  })

  it('vacation is ended but not started must be false', () => {
    const date = new Date('2021-01-18')

    expect(isFirstDay(vacations, date)).toBe(false)
  })
})

import isLastDay from './'
import vacations from '../../../__STUBS__/vacations'

describe('utils/isLastDay', () => {
  it('vacation is not ended must be false', () => {
    const date = new Date('2021-01-01')

    expect(isLastDay(vacations, date)).toBe(false)
  })

  it('vacation is ended must be true', () => {
    const date = new Date('2021-01-18')

    expect(isLastDay(vacations, date)).toBe(true)
  })

  it('vacation is statrted but not ended must be false', () => {
    const date = new Date('2021-01-15')

    expect(isLastDay(vacations, date)).toBe(false)
  })
})

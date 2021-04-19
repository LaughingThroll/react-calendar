import isWeekend from './'

describe('utils/isWeekend', () => {
  it('args [date] should return false', () => {
    const date = new Date('2021-04-19')

    expect(isWeekend(date)).toBe(false)
  })

  it('args [date] should return true', () => {
    const date = new Date('2021-04-18')

    expect(isWeekend(date)).toBe(true)
  })
})

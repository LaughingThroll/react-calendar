import lastDayInMonth from './'

describe('utils/lastDayInMonth', () => {
  it('args new Date() should return 30', () => {
    expect(lastDayInMonth(new Date())).toBe(30)
  })

  it('args new Date(2021-02-01) should return 28', () => {
    expect(lastDayInMonth(new Date('2021-02-01'))).toBe(28)
  })

  it('args new Date(2021.02.01) should return 28', () => {
    expect(lastDayInMonth(new Date('2021.02.01'))).toBe(28)
  })
})

import formatDateInKebabCase from './'

describe('utils/formatDateInKebabCase', () => {
  it('args [new Date(2021-04-19)] should return "2021-04-19"', () => {
    const date = new Date('2021-04-19')
    expect(formatDateInKebabCase(date)).toBe('2021-04-19')
  })
})

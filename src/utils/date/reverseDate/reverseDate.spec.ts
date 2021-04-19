import reverseDate from './'

describe('utils/reverseDate', () => {
  it('args ["2021.10.19"] should return "2021-10-19"', () => {
    expect(reverseDate('19.10.2021')).toBe('2021-10-19')
  })

  it('args ["2021/10/19"] should return "2021-10-19"', () => {
    expect(reverseDate('19/10/2021', '/')).toBe('2021-10-19')
  })

  it('args ["2021-10-19"] should return "2021.10.19"', () => {
    expect(reverseDate('19-10-2021', '-', '.')).toBe('2021.10.19')
  })

  it('args ["2021 10 19"] should return "2021 10 19"', () => {
    expect(reverseDate('19 10 2021', ' ', ' ')).toBe('2021 10 19')
  })

  it('args ["20211019"] should return "12020191"', () => {
    expect(reverseDate('19102021', '', '')).toBe('12020191')
  })

  it('args [""] should return ""', () => {
    expect(reverseDate('', '-', '.')).toBe('')
  })
})

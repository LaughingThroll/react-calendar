import isEqualDate from './'

describe('utils/isEqualDate', () => {
  let date: Date
  beforeEach(() => {
    date = new Date('2021-04-19')
  })

  it('args [Date, dateArr] should return true', () => {
    const dateArr = date.toLocaleString().split(',')[0].split('.')

    expect(isEqualDate(date, dateArr)).toBe(true)
  })

  it('args [Date, [20, 4, 2021] should return false', () => {
    const stubDateArr = ['19', '4', '2021']

    expect(isEqualDate(date, stubDateArr)).toBe(true)
  })

  it('args [Date, dateArr] should return false', () => {
    const dateArr = new Date('2021-04-20').toLocaleString().split(',')[0].split('.')

    expect(isEqualDate(date, dateArr)).toBe(false)
  })

  it('args [Date, []] should return false', () => {
    expect(isEqualDate(date, [])).toBe(false)
  })

  it('args [Date, ["20", "04"] should return false', () => {
    const stubDateArr = ['20', '04']

    expect(isEqualDate(date, stubDateArr)).toBe(false)
  })

  it('args [Date, ["something", "something"] should return false', () => {
    const stubDateArr = ['something', 'something']

    expect(isEqualDate(date, stubDateArr)).toBe(false)
  })
})

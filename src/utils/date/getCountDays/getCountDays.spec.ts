import getCountDays from './'

describe('utils/getCountDays', () => {
  it('args["2021-04-19", "2021-04-19"] should return 0', () => {
    expect(getCountDays('2021-04-19', '2021-04-19')).toBe(0)
  })

  it('args["2021/04/19", "2021-04-19"] should return 0', () => {
    expect(getCountDays('2021-04-19', '2021-04-19')).toBe(0)
  })

  it('args["2021-04-19", "2021/04/19"] should return 0', () => {
    expect(getCountDays('2021-04-19', '2021-04-19')).toBe(0)
  })

  it('args["2021.04.19", "2021/04/19"] should return 0', () => {
    expect(getCountDays('2021-04-19', '2021-04-19')).toBe(0)
  })

  it('args["2021-04-19T00:00:00", "2021/04/19"] should return 0', () => {
    expect(getCountDays('2021-04-19', '2021-04-19')).toBe(0)
  })

  it('args["2021-04-19", "2021/04/19T00:00:00.000Z"] should return 0', () => {
    expect(getCountDays('2021-04-19', '2021-04-19')).toBe(0)
  })

  it('args["2021-04-12", "2021/04/19"] should return 7', () => {
    expect(getCountDays('2021-04-12', '2021-04-19')).toBe(7)
  })

  it('args["2021-05-12", "2021/04/19"] should return 30', () => {
    expect(getCountDays('2021-04-19', '2021-05-19')).toBe(30)
  })

  it('args["2021-05-19", "2021/04/19"] should return -30', () => {
    expect(getCountDays('2021-05-19', '2021-04-19')).toBe(-30)
  })
})

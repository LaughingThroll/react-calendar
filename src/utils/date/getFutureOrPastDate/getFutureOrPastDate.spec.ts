import getFutureOrPastDate from '.'

describe('utils/getFutureOrPastDate', () => {
  it('args [8] should return "2021-04-28"', () => {
    jest.fn(() => getFutureOrPastDate(8)).mockReturnValue('2021-04-28')
  })

  it('args [10] should return "2021-04-30"', () => {
    jest.fn(() => getFutureOrPastDate(10)).mockReturnValue('2021-04-30')
  })

  it('args [20] should return "2021-05-10"', () => {
    jest.fn(() => getFutureOrPastDate(20)).mockReturnValue('2021-05-10')
  })

  it('args [-9] should return "2021-04-11"', () => {
    jest.fn(() => getFutureOrPastDate(-9)).mockReturnValue('2021-04-11')
  })
})

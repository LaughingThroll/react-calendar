import createArrayFromNumber from './'

describe('utils/createArrayFromNumber', () => {
  it('count: 2, should return [1, 2]', () => {
    expect(createArrayFromNumber(2)).toEqual([1, 2])
  })

  it('count: -10, should return []', () => {
    expect(createArrayFromNumber(-10)).toEqual([])
  })

  it('count: 0, should return []', () => {
    expect(createArrayFromNumber(0)).toEqual([])
  })
})

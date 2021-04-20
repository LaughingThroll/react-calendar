import normalizeTime from '.'

describe('utils/normalizeTime', () => {
  it('args ["2021-04-19T00:00:30"] should return "2021-04-19T00:00:00', () => {
    expect(normalizeTime('2021-04-19T00:00:30')).toBe('2021-04-19T00:00:00')
  })

  it('args ["2021-04-19T30:00:00"] should return "2021-04-19T00:00:00', () => {
    expect(normalizeTime('2021-04-19T30:00:00')).toBe('2021-04-19T00:00:00')
  })

  it('args ["2021-04-19"] should return "2021-04-19T00:00:00', () => {
    expect(normalizeTime('2021-04-19')).toBe('2021-04-19T00:00:00')
  })

  it('args ["2021-04-19T00:"] should return "2021-04-19T00:00:00', () => {
    expect(normalizeTime('2021-04-19T00:')).toBe('2021-04-19T00:00:00')
  })
  // I don't know needing this test?
  it('args ["2021-04-19t00"] should return "2021-04-19t00T00:00:00', () => {
    expect(normalizeTime('2021-04-19t00')).toBe('2021-04-19t00T00:00:00')
  })
})

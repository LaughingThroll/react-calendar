import normalizeTime from '.'

describe('utils/normalizeTime', () => {
  it('args ["2021-04-19:T00:00:30.000Z"] should return "2021-04-19:T00:00:00.000Z', () => {
    expect(normalizeTime('2021-04-19:T00:00:30.000Z')).toBe('2021-04-19:T00:00:00.000Z')
  })

  it('args ["2021-04-19:T30:00:00.000Z"] should return "2021-04-19:T00:00:00.000Z', () => {
    expect(normalizeTime('2021-04-19:T30:00:00.000Z')).toBe('2021-04-19:T00:00:00.000Z')
  })

  it('args ["2021-04-19"] should return "2021-04-19:T00:00:00.000Z', () => {
    expect(normalizeTime('2021-04-19')).toBe('2021-04-19:T00:00:00.000Z')
  })

  it('args ["2021-04-19:T00:"] should return "2021-04-19:T00:00:00.000Z', () => {
    expect(normalizeTime('2021-04-19:T00:')).toBe('2021-04-19:T00:00:00.000Z')
  })
  // I don't know needing this test?
  it('args ["2021-04-19"] should return "2021-04-19:t00:T00:00:00.000Z', () => {
    expect(normalizeTime('2021-04-19:t00')).toBe('2021-04-19:t00:T00:00:00.000Z')
  })
})

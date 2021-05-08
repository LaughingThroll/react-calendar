import findByID from './'

const stub = [
  {
    id: 1,
  },
  {
    id: 2,
  },
]

const stubWithoutID = [
  {
    key: 2,
  },
]

describe('utils/findByID', () => {
  it('args[stub, 1] should return { id: 1 }', () => {
    expect(findByID(stub, 1)).toEqual({ id: 1 })
  })

  it('args[stub, 0] should return falsy value', () => {
    expect(findByID(stub, 0)).toBeFalsy()
  })

  it('args[stubWithoutID, 2] should return Exception', () => {
    expect(() => findByID(stubWithoutID, 2)).toThrow()
  })

  it('args[[], 2] should return falsy value', () => {
    expect(findByID([], 2)).toBeFalsy()
  })
})

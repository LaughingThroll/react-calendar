import { getBinaryNumber } from './'

describe('utils/getBinaryNumber', () => {
  const args = [0, 5, 8, 10, 3, 12, 145, -1, -12, -4]
  const answers = ['0', '05', '08', '10', '03', '12', '145', '-1', '-12', '-4']

  args.forEach((arg, i) => {
    const answer = answers[i]
    it(`args [${arg}] should return ${answer}`, () => {
      expect(getBinaryNumber(arg)).toBe(answer)
    })
  })
})

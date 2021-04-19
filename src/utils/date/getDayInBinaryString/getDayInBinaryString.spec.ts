import getDayBinaryInString from '.'

describe('utils/getBinaryString', () => {
  const stubDate: Date[] = Array.from({ length: 7 }, (_, i) => new Date(`2021-04-${19 + i}`))
  const answerArr: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  stubDate.forEach((date, index) => {
    const answer = answerArr[index]
    it(`args [new Date(${date.toISOString()})] shoud return "${answer}"`, () => {
      expect(getDayBinaryInString(date)).toBe(answer)
    })
  })
})

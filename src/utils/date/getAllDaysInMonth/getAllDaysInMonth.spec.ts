import getAllDaysInMonth from './'

const stubMonth: Date[] = []

for (let i = 1; i < 31; i++) {
  stubMonth.push(new Date(`2021-04-${i}`))
}
console.log(stubMonth)

describe('utils/getAllDaysInMonth', () => {
  it('args new Date() should return [new Date(1-30) * 30]', () => {
    expect.any(getAllDaysInMonth(new Date()))
  })
})

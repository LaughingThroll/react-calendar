import { VacationTypes } from '../types/model/vacation'

describe('patch vacation', () => {
  it('patchVacation fake request', () => {
    const vacation = {
      startDate: '1971-01-01',
      endDate: '1971-01-01',
      type: VacationTypes.PAID,
    }

    const fakePatchVacation = Promise.resolve().then(() => vacation)

    return fakePatchVacation.then((res) => {
      expect(res).toBe(vacation)
    })
  })
})

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
import { patchVacation } from './vacations'
import { VacationDTO, VacationTypes } from '../types/model/vacation'
enableFetchMocks()

describe('patchVacation', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  const vacation = {
    startDate: '1971-01-01',
    endDate: '1971-01-01',
    type: VacationTypes.PAID,
  }

  const answer = {
    startDate: '01.01.1971',
    endDate: '01.01.1971',
    type: VacationTypes.PAID,
  }

  it('success request request', () => {
    const submitVacation: VacationDTO = {
      currentTeamID: 'asdksadowkd',
      currentMemberID: 'asdffegegege',
      ...vacation,
    }

    fetchMock.mockResponseOnce(JSON.stringify(answer))

    // eslint-disable-next-line jest/valid-expect-in-promise
    patchVacation(submitVacation).then((res) => {
      expect(res).toBe(answer)
    })

    expect(fetchMock.mock.calls.length).toBe(1)
  })

  it('fail request request incorrect id', () => {
    const submitVacation: VacationDTO = {
      currentTeamID: 'asdksadow',
      currentMemberID: 'asdffegegege',
      ...vacation,
    }

    fetchMock.mockResponseOnce(JSON.stringify({}))

    // eslint-disable-next-line jest/valid-expect-in-promise
    patchVacation(submitVacation).then((res) => {
      expect(res).toBe({})
    })

    expect(fetchMock.mock.calls.length).toBe(1)
  })
})

import makeRequest from './'
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

const stubResponse = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
}

describe('utils/makeRequest', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it(`normal request should return ${stubResponse}`, () => {
    fetchMock.mockResponseOnce(JSON.stringify(stubResponse))

    // eslint-disable-next-line jest/valid-expect-in-promise
    makeRequest('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
      expect(res).toEqual(stubResponse)
    })

    expect(fetchMock.mock.calls.length).toBe(1)
    expect(fetchMock.mock.calls[0][0]).toBe('https://jsonplaceholder.typicode.com/posts/1')
  })

  it('fail request should return {}', () => {
    fetchMock.mockResponseOnce(JSON.stringify({}))

    // eslint-disable-next-line jest/valid-expect-in-promise
    makeRequest('https://jsonplaceholder.typicode.com/pots/1').then((res) => {
      expect(res).toEqual({})
    })

    expect(fetchMock.mock.calls.length).toBe(1)
    expect(fetchMock.mock.calls[0][0]).toBe('https://jsonplaceholder.typicode.com/pots/1')
  })
})

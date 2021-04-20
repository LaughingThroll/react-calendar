import makeRequest from './'

const stubResponse = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
}

describe('utils/makeRequest', () => {
  it(`args ['https://jsonplaceholder.typicode.com/posts/1'] should return ${stubResponse}`, () => {
    return makeRequest('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
      expect(res).toEqual(stubResponse)
    })
  })

  it('args ["https://jsonplaceholder.typicode.com/pots/1"](incorrect url), should return {}', () => {
    return makeRequest('https://jsonplaceholder.typicode.com/pots/1').then((res) => {
      expect(res).toEqual({})
    })
  })
})

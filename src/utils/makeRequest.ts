const makeRequest = (URL: string, options?: RequestInit): Promise<any> => {
  return fetch(URL, options).then((res) => res.json())
}

export default makeRequest

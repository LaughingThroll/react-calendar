// import departmentTeams from '../DB';

// {
// method: "PUT",
// body: JSON.stringify(departmentTeams),
// headers: {
// "Content-type": "application/json; charset=UTF-8",
// },
// }

async function makeRequest(url: string, options?: RequestInit): Promise<Response> {
  const response = await fetch(url, options)
  return await response.json()
}

export default makeRequest

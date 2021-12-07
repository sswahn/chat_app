
const Server = () => {
  const get = api => {
    return fetch(api).json()
  }
  const post = async (api, request) => {
    const response = await fetch(api, {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  }

  return { get, post }
}

export default Server()

const Cookie = () => {
  const get = name => {
    if (document.cookie === '') {
      return 
    }
    const parts = document.cookie.split(';')
    const cookie = parts.reduce((acc, val) => { 
      const item_parts = val.split('=')
      return { ...acc, [item_parts[0].trim()]: item_parts[1] }
    }, {})
    return cookie[name]
  }
  const set = (name, value, expiration) => {
    document.cookie = `${name}=${value};expires=${expiration.expires};path=/;samesite=strict;secure`
  }
  const remove = name => {
    document.cookie = `${name}=;expires=;max-age=0;path=/;samesite=strict;secure`
  }
  const decode = token => {
    return JSON.parse(atob(token.split('.')[1]))
  }
  return { get, set, remove, decode }
}

export default Cookie()
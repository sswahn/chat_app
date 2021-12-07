
const Store = () => {
  const get = name => {
    return JSON.parse(localStorage.getItem(name))
  }
  const set = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
  }
  const remove = name => {
    localStorage.removeItem(name)
  }

  return { get, set, remove }
}

export default Store()
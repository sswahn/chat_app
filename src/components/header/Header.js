import { useContext } from 'react'
import { Context } from '../../Provider'

export default () => {
  const [context, dispatch] = useContext(Context)

  const createChat = event => {
    // 5 chat limit, make conditional check in form:
    dispatch({ type: 'modal', payload: 'create-chat' })
  }

  return (
    <header id="header">
      <button type="button" onClick={createChat}>Create chat</button>
    </header>
  )
}
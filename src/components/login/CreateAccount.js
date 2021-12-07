import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import styles from './login.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const handleSubmit = async event => {
    event.preventDefault()
    if (event.target.elements[2].value !== event.target.elements[3].value) {
      return alert('Passwords do not match.')
    }
    const request = {
      username: event.target.elements[0].value,
      email: event.target.elements[1].value,
      password: event.target.elements[2].value
    }
    const response = await server.post('api.here', request)
    if (response.error !== undefined) {
      return alert('There was a system error.')
    }
    // confirmation alert
    // account was created, please check email to confirm
  }

  const closeModal = event => {
    if (event.target.closest('#register') === null) {
      dispatch({ type: 'modal' })
    }
  }
  
  useEffect(() => {
    document.body.addEventListener('click', closeModal)
    return () => {
      document.body.removeEventListener('click', closeModal)
    }
  }, [])
  
  return (
    <div id="register">
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  )
}
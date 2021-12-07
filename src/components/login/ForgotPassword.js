import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import styles from './login.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const handleSubmit = async event => {
    event.preventDefault()
    const request = {
      email: event.target.elements[0].value
    }
    const response = await server.post('api.here', request)
    if (response.error !== undefined) {
      return alert('There was a system error.')
    }
    // open reset password modal
  }

  const closeModal = event => {
    if (event.target.closest('#forgot-password') === null) {
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
    <div id="forgot-password">
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Confirm Email</h2>
          <input type="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import server from '../../utilities/Server'
import styles from './login.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ checked: true })

  const underConstruction = event => {
    event.preventDefault()
    alert('Page is under construction.')
  }

  const handleCheckbox = event => {
    setState({ checked: !state.checked })
  }

  const handleForgotPassword = event => {
    dispatch({ type: 'modal', payload: 'forgot-password'})
  }

  const handleCreatAccount = event => {
    dispatch({ type: 'modal', payload: 'register' })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const request = {
      username: event.target.elements[0].value,
      password: event.target.elements[2].value
    }
    const response = await server.post(config.api.sign_in, request)
    if (response.error !== undefined) {
      return dispatch({ type: 'alert', payload: config.errors.api_response })
    }
    window.location.href = config.url.home
  }


  return (
    <div className={styles.login}>
      <div id="login" className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <div className="login-footer">
            <label>
              <input type="checkbox" checked={state.checked} onChange={handleCheckbox} />
              <span>Remember Me</span>
            </label>
            <div>
              <button type="button" className="login-form-link" onClick={handleForgotPassword}>Forgot Password</button>
            </div>
          </div>
        </form>
        <hr />
        <div className={styles.register}>
          <span>or </span>
          <button type="button" onClick={handleCreatAccount}>create an account</button>
        </div>
        <div className={styles.legal}>
          <p>By signing up, you agree to the <a href="" onClick={underConstruction}>Terms of Service</a> and <a href="" onClick={underConstruction}>Privacy Policy</a>, including <a href="" onClick={underConstruction}>Cookie Use</a>.</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
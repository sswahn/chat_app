import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import styles from './link.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const handleSubmit = event => {
    event.preventDefault()

    const text = event.target.elements[0].value
    const url = event.target.elements[1].value
    
    try {
      new URL(url)
    } catch (error) {
      return alert(`${url} is not a valid URL.`)
    }

    const element = document.createElement('a')
    element.href = url
    element.innerText = text || url
    element.target = '_blank'
    element.rel = 'noopener noreferrer'
    element.tabIndex = '-1'
    
    // add onclick function or addeventlistener that
    // preventsDefault and gives warning modal

    //TODO: needs to append/insert at cursor location...
    document.getElementById('textarea').appendChild(element)
  
    dispatch({ type: 'modal' })



    // just checks if link is external domain
    /* move this to input component in anchor onCLick event
    const horizonsend_https = url.split('horizonsend.com')[0].length === 8
    const horizonsend_http = url.split('horizonsend.com')[0].length === 7
    const horizonsend_no_prefix = url.split('horizonsend.com')[0].length === 0
    if (horizonsend_https || horizonsend_http || horizonsend_no_prefix) {
      return 
    }
    if (!window.confirm('You are about to open an external website. Continue?')) {
      event.preventDefault()
    }
    */
  }
  
  const closeModal = event => {
    if (event.target.closest('#link') === null) {
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
    <div id="link" className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add link</h2>
        <input type="text" maxLength="2000" placeholder="Link text" />
        <input type="url" pattern="https?://.+" maxLength="2000" placeholder="https://example.com" required />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
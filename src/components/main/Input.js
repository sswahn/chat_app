import { useContext, useState } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import store from '../../utilities/Store'
import server from '../../utilities/Server'
import cookie from '../../utilities/Cookies'
import styles from './main.module.css'
import Emoji from '../emoji/Emoji'
import BoldButton from '../buttons/BoldButton'
import ItalicButton from '../buttons/ItalicButton'
import LinkButton from '../buttons/LinkButton'
import MentionButton from '../buttons/MentionButton'
import EmojiButton from '../buttons/EmojiButton'
import UploadImageButton from '../buttons/UploadImageButton'
import SubmitButton from '../buttons/SubmitButton'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    stored_text: store.get('text') || '',
    emoji: false
  })

  // const handleKeyDown = async event => {
  //   store.set('text', event.target.outerText)
  //   if (event.keyCode !== 13) {
  //     return
  //   }
  //   event.preventDefault()
  //   const textarea = document.getElementById('textarea')
  //   if (!textarea.textContent) {
  //     return alert('Please enter text to leave a message.')
  //   }
  //   const request = {
  //     user: 'Steve',
  //     message: textarea.textContent
  //   }
  //   const response = await server.post(config.api.create.message, request)
  //   if (response.error !== undefined) {
  //     return alert('There was a system error.', response.error.message)
  //   }
  //   textarea.textContent = ''
  //   dispatch({ type: 'update', payload: response.message })
  //   textarea.focus()
  //   store.remove('text')
  //   setState({ stored_text: '' })
  // }

  // TODO: refer to existing code in aws for cognito syntax
  const postRequest = async element => {
    const token = cookie.get('token')
    const session = cookie.decode(token)
    const user = { username: session['cognito:username'], avatar: session['cognito:picture'] }
    const request = { user, message: element.innerHTML }
    const response = await server.post(config.api.create.message, request)
    if (!response.error) {
      return alert('Please enter text to leave a message.')
    }
    dispatch({ type: 'update', payload: response.message })
    element.textContent = ''
    element.focus()
    store.remove('text')
  }

  const handleKeyDown = async event => {
    store.set('text', event.target.outerText)
    event.keyCode === 13 && handleSubmit(event)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const element = document.getElementById('textarea')
    !element.textContent 
      ? alert('Please enter text to leave a message.')
      : postRequest(element)
  }

  /////////
/*
  const handleSubmit = async event => {
    event.preventDefault()
    const textarea = document.getElementById('textarea')
    if (!textarea.textContent) {
      return alert('Please enter text to leave a message.')
    }
    // get cookie
    const request = {
      user: 'Steve', // cookie.username
      // avatar: cookie.picture 
      message: textarea.innerHTML
    }
    const response = await server.post(config.api.create.message, request)
    if (response.error !== undefined) {
      return alert('There was a system error.', response.error.message)
    }
    dispatch({ type: 'update', payload: response.message })
    textarea.textContent = ''
    textarea.focus()
    store.remove('text')
    setState({ stored_text: '' })
  }
  */


  return (
    <form className={styles.input} 
      onSubmit={handleSubmit}
      style={{minHeight: state.parent_height}}>
      <div id="textarea" className={styles.textarea}
        data-placeholder="Write a message"
        contentEditable="plaintext-only"
        suppressContentEditableWarning="true"
        spellCheck="true"
        tabIndex="0"
        onKeyDown={handleKeyDown}>
          {state.stored_text}
          {/** state.img_src ? <img src={state_src} alt="" /> : <></> */}
      </div>
      <div role="toolbar">
        <div>
          <BoldButton />
          <ItalicButton />
          <LinkButton />
        </div>
        <div>
          <MentionButton />
          <EmojiButton />
          <UploadImageButton />
          <SubmitButton />
        </div>
      </div>
    </form>
  )
}
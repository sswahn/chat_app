import Provider from './Provider'
import Modal from './Modal'
import Main from './components/main/Main'
import "./index.css"

/**
 * 
 * toolbar functionality: bold/italic/link/mention/emoji
 * 
 * figure out how to get page 
 * title/description/image/video/favicon from links
 * (this is serverside issue)
 * 
 */

export default () => 
  <Provider>
    <Modal />
    <Main />
  </Provider>
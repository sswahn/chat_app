import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './button.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const handleLinkModal = event => {
    dispatch({ type: 'modal', payload: 'link' })
  }
  
  return (
    <button type="button" className={styles.tooltip} onClick={handleLinkModal}>
      <i className="fa fa-link"></i>
      <span className={styles.tooltiptext}>Link</span>
    </button>
  )
}

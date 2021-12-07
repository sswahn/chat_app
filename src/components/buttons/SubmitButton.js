
import styles from './button.module.css'

export default () => {

  return (
    <button type="submit" className={styles.tooltip}>
      <i className="fa fa-paper-plane"></i>
      <span className={styles.tooltiptext}>Send</span>
    </button>
  )
}
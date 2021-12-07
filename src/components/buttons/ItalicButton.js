
import styles from './button.module.css'

export default () => {



  return (
    <button type="button" className={styles.tooltip}>
      <i className="fa fa-italic"></i>
      <span className={styles.tooltiptext}>Italic</span>
    </button>
  )
}
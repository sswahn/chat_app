import styles from './button.module.css'

export default () => {

  return (
    <button type="button" className={styles.tooltip}>
      <i className="fa fa-at"></i>
      <span className={styles.tooltiptext}>Mention</span>
    </button>
  )
}
import styles from './button.module.css'

export default () => {

  return (
    <button type="button" className={styles.tooltip}>
      <i className="fa fa-image"></i>
      <span className={styles.tooltiptext}>Upload</span>
    </button>
  )
}
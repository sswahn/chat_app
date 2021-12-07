import styles from './button.module.css'

export default () => {

  const handleToggleBold = () => {
    //TODO: move bold button to its own component

    const textarea = document.getElementById('textarea')
    const selection = window.getSelection()
    const range = selection.getRangeAt(0)
    const fragment = range.cloneContents()

    const preSelectionRange = range.cloneRange() // this seems to gets caret locaiton

    console.log('range: ', range)
    console.log('slection range: ', selection.toString().length)
    console.log('pre selection range: ',  preSelectionRange.startOffset)

    if (!fragment.firstChild) {
      console.log('should only see this if there is no selection.')
    // if nothing is selected:
    // create setState that makes onChange method append to a bold span
      return
    }

    if (fragment.firstChild.nodeName !== 'SPAN') {
      const element = document.createElement('span')
      element.style.fontWeight = 'bold'
      element.setAttribute('data-identifier', crypto.randomUUID())
      selection.getRangeAt(0).surroundContents(element)
    } else {
      const id = fragment.firstChild.dataset?.identifier
      const element = textarea.querySelector(`[data-identifier="${id}"]`)
      fragment.firstChild.style?.fontWeight === 'bold'
        ? element.style.fontWeight = 'normal'
        : element.style.fontWeight = 'bold' 
    }


    // (slack inserts an empty <strong> element when no selection is made on click)
    // (unstyled text has quotes around them in inspector. not sure why... maybe a delimiter?)
    // try this: (slack-like way)
    // when bold or italic button is clicked
    // it setState weather one or the other or both are active
    // then you just compare state to selection
    // if (state.bold) append text to a <strong> element
    // if (state.italic) append text to <em> element
    // if (state.italic && state.bold) append to <em> and em to <strong>

    // check this out to find out how to get cursor position:
    // https://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container/4812022#4812022

  }

  return (
    <button type="button" className={styles.tooltip} onClick={handleToggleBold}>
      <i className="fa fa-bold"></i>
      <span className={styles.tooltiptext}>Bold</span>
    </button>
  )
}
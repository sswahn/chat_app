
import styles from './emoji.module.css'

export default () => {

  const handleEmoji = event => {
    document.getElementById('textarea').appendChild(
      document.createTextNode(event.target.textContent)
    )
  }

  return (
    <div id="emoji" className={styles.emoji}>
      <span onClick={handleEmoji}>&#x1F600;</span>
      <span onClick={handleEmoji}>&#x1F601;</span>
      <span onClick={handleEmoji}>&#x1F602;</span>
      <span onClick={handleEmoji}>&#x1F603;</span>
      <span onClick={handleEmoji}>&#x1F604;</span>
      <span onClick={handleEmoji}>&#x1F605;</span>
      <span onClick={handleEmoji}>&#x1F606;</span>
      <span onClick={handleEmoji}>&#x1F607;</span>
      <span onClick={handleEmoji}>&#x1F608;</span>
      <span onClick={handleEmoji}>&#x1F609;</span>
      <span onClick={handleEmoji}>&#x1F60A;</span>
      <span onClick={handleEmoji}>&#x1F60B;</span>
      <span onClick={handleEmoji}>&#x1F60C;</span>
      <span onClick={handleEmoji}>&#x1F60D;</span>
      <span onClick={handleEmoji}>&#x1F60E;</span>
      <span onClick={handleEmoji}>&#x1F60F;</span>
      <span onClick={handleEmoji}>&#x1F610;</span>
      <span onClick={handleEmoji}>&#x1F611;</span>
      <span onClick={handleEmoji}>&#x1F612;</span>
      <span onClick={handleEmoji}>&#x1F613;</span>
      <span onClick={handleEmoji}>&#x1F614;</span>
      <span onClick={handleEmoji}>&#x1F615;</span>
      <span onClick={handleEmoji}>&#x1F616;</span>
      <span onClick={handleEmoji}>&#x1F617;</span>
      <span onClick={handleEmoji}>&#x1F618;</span>
      <span onClick={handleEmoji}>&#x1F619;</span>
      <span onClick={handleEmoji}>&#x1F61A;</span>
      <span onClick={handleEmoji}>&#x1F61B;</span>
      <span onClick={handleEmoji}>&#x1F61C;</span>
      <span onClick={handleEmoji}>&#x1F61D;</span>
      <span onClick={handleEmoji}>&#x1F61E;</span>
      <span onClick={handleEmoji}>&#x1F61F;</span>
      <span onClick={handleEmoji}>&#x1F620;</span>
      <span onClick={handleEmoji}>&#x1F621;</span>
      <span onClick={handleEmoji}>&#x1F622;</span>
      <span onClick={handleEmoji}>&#x1F623;</span>
      <span onClick={handleEmoji}>&#x1F624;</span>
      <span onClick={handleEmoji}>&#x1F625;</span>
      <span onClick={handleEmoji}>&#x1F626;</span>
      <span onClick={handleEmoji}>&#x1F627;</span>
      <span onClick={handleEmoji}>&#x1F628;</span>
      <span onClick={handleEmoji}>&#x1F629;</span>
      <span onClick={handleEmoji}>&#x1F62A;</span>
      <span onClick={handleEmoji}>&#x1F62B;</span>
      <span onClick={handleEmoji}>&#x1F62C;</span>
      <span onClick={handleEmoji}>&#x1F62D;</span>
      <span onClick={handleEmoji}>&#x1F62E;</span>
      <span onClick={handleEmoji}>&#x1F62F;</span>
      <span onClick={handleEmoji}>&#x1F630;</span>
      <span onClick={handleEmoji}>&#x1F631;</span>
      <span onClick={handleEmoji}>&#x1F632;</span>
      <span onClick={handleEmoji}>&#x1F633;</span>
      <span onClick={handleEmoji}>&#x1F634;</span>
      <span onClick={handleEmoji}>&#x1F635;</span>
      <span onClick={handleEmoji}>&#x1F636;</span>
      <span onClick={handleEmoji}>&#x1F637;</span>
      <span onClick={handleEmoji}>&#x1F641;</span>
      <span onClick={handleEmoji}>&#x1F642;</span>
      <span onClick={handleEmoji}>&#x1F643;</span>
      <span onClick={handleEmoji}>&#x1F644;</span>
      <span onClick={handleEmoji}>&#x1F910;</span>
      <span onClick={handleEmoji}>&#x1F911;</span>
      <span onClick={handleEmoji}>&#x1F912;</span>
      <span onClick={handleEmoji}>&#x1F913;</span>
      <span onClick={handleEmoji}>&#x1F914;</span>
      <span onClick={handleEmoji}>&#x1F915;</span>
      <span onClick={handleEmoji}>&#x1F920;</span>
      <span onClick={handleEmoji}>&#x1F921;</span>
      <span onClick={handleEmoji}>&#x1F922;</span>
      <span onClick={handleEmoji}>&#x1F923;</span>
      <span onClick={handleEmoji}>&#x1F924;</span>
      <span onClick={handleEmoji}>&#x1F925;</span>
      <span onClick={handleEmoji}>&#x1F927;</span>
      <span onClick={handleEmoji}>&#x1F928;</span>
      <span onClick={handleEmoji}>&#x1F929;</span>
      <span onClick={handleEmoji}>&#x1F92A;</span>
      <span onClick={handleEmoji}>&#x1F92B;</span>
      <span onClick={handleEmoji}>&#x1F92C;</span>
      <span onClick={handleEmoji}>&#x1F92D;</span>
      <span onClick={handleEmoji}>&#x1F92E;</span>
      <span onClick={handleEmoji}>&#x1F92F;</span>
      <span onClick={handleEmoji}>&#x1F9D0;</span>
      
      <span onClick={handleEmoji}>&#x1F479;</span>
      <span onClick={handleEmoji}>&#x1F4A9;</span>
      <span onClick={handleEmoji}>&#x1F37B;</span>
      <span onClick={handleEmoji}>&#x1F37A;</span>
      <span onClick={handleEmoji}>&#x1F4A5;</span>
    </div>
  )
}
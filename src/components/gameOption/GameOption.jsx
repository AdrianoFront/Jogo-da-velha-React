import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon=({ IconName }) => <Icon iconName={iconName} size="25px"/>

function GameOption ({status}) {
  return (
    <div className={styles.gameOption}>
      {
        status === 1 && <GameIcon iconName="circle" />
      }
            {
        status === -1 && <GameIcon iconName="xis" />
      }
      
    </div>
  )
}

export default GameOption
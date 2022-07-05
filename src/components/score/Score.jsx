import styles from './Score.module.css'
import Icon from '../icon/Icon'
import Game from '.game/Game'

function Score ({ xWinner, circleWinner }) {
    const Winner = () => winner !== 0 || isWinner
}

  return (
    <>
      <h4>Placar:</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" />
          <h2>0</h2>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="xis" />
          <h2>0</h2>
        </div>
      </div>
    </>
  )
}

export default Score
import styles from './Score.module.css'
import Icon from '../icon/Icon'
import Game from './game/Game'

function Score ({ xWinnerTimes, circleWinnerTimes }) {
   return (
      <>
        <h4>Placar:</h4>
        <div className={styles.score}>
          <div className={styles.scoreContent}>
            <Icon iconName="circle" />
            <h2>{circleWinnerTimes}</h2>
          </div>
          <div className={styles.scoreContent}>
            <Icon iconName="xis" />
            <h2>{xWinnerTimes}</h2>
          </div>
        </div>
      </>
   )
}

export default Score
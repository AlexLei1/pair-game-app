import { FC, useState } from 'react'
import styles from './home.module.scss'
import Game from '../game/Game'

const Home: FC = () => {

	const [isGame, setIsGame] = useState(false)

  return (
    <div className={styles.home}>
				{isGame ? <Game/> : 
				<div className={styles.button}>
					<button onClick={() => setIsGame(true)}>GAME</button>
				</div> } 
		</div>
  )
}

export default Home

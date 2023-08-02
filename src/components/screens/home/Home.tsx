import { FC } from 'react'
import styles from './home.module.scss'
import Game from '../game/Game'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { fireflyData } from './firefly.data';



const Home: FC = () => {
	const {toggleGame} = useActions()
	const {isGame} = useTypedSelector(state => state.game)
	console.log('re-render Home')
  return (
		<>
			{fireflyData.map((data) => (
				<div className={styles.firefly}></div>
			))}
			{isGame 
			? <Game/> 
			:	<div className={styles.button}>
					<button onClick={() => toggleGame({isGame})}>GAME</button>
				</div>}
		</>
 
  )
}

export default Home

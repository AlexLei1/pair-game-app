import { FC } from 'react'
import styles from './home.module.scss'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { fireflyData } from './firefly.data';
import ReduxGame from '../reduxGame/reduxGame'

const Home: FC = () => {
	const {toggleGame} = useActions()
	const {isGame} = useTypedSelector(state => state.game)

  return (
		<>
			{fireflyData.map(() => (
				<div className={styles.firefly}></div>
			))}
			{isGame 
			? <ReduxGame/> 
			:	<div className={styles.button}>
					<button onClick={() => toggleGame({isGame})}><span>GAME</span></button>
				</div>}
		</>
 
  )
}

export default Home

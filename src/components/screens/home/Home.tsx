import { FC, useState } from 'react'
import styles from './home.module.scss'
import Game from '../game/Game'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'



const Home: FC = () => {
	const {toggleBurger} = useActions()
	const {isGame} = useTypedSelector(state => state.game)
	console.log('re-render Home')

  return (
    <div className={styles.home}>
				{isGame ? <Game/> : 
				<div className={styles.button}>
					<button onClick={() => toggleBurger({isGame})}>GAME</button>
				</div> } 
		</div>
  )
}

export default Home

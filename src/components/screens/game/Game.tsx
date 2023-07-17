import GameItem from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC} from 'react'
import styles from './Game.module.scss'

const Game: FC = () => {

	// const {items} = useGame()

	return (
		<div className={styles.cube}>
			<span className='_icon-hand'></span>
				{/* <GameItem/> */}
		</div>
	)
}

export default Game

//1 - переходим на страницу игры, формируется поле из 16 элемнтов внутри куба
//2 - при клике game = true активируется игра
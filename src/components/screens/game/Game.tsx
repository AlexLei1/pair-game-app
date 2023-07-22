import GameItem, { IGameItem } from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState} from 'react'
import styles from './Game.module.scss'


const Game: FC = () => {
	const {counter, mixing} = useGame()

	return (
		<>
			<div className={styles.cube}>
				{counter.map(({id, icon, y, x}) => <div key={id} className={styles.gameItem} style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0) rotateY(${180}deg)`}}  data-matrix-id={id}><span className={`${icon}`} style={{opacity: `0`}}></span></div>)}
			</div>
			<button onClick={() => mixing()}>mixing</button>
		</>
	)
}

export default Game

// 1 - рассавить элементы + добавить возможность перемешивать элемнты 
// 2 - 
// 3 - 
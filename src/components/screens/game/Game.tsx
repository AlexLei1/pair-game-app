import GameItem, { IGameItem } from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState} from 'react'
import styles from './Game.module.scss'
import { gameData } from '@/components/screens/game/game.data';


const Game: FC = () => {
	
	const itemsRef = useRef([])
	const {mixing, showItem} = useGame(itemsRef.current)

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, gameData.length);
  }, []);

	return (
		<>
			<div className={styles.cube}>
				{gameData.map(({id, icon, y, x, opacity, rotate}, i) => <button disabled={false} key={i} ref={el => itemsRef.current[i] = el} onClick={() => showItem(`${i}`, id)} className={styles.gameItem} style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0) rotateY(${rotate}deg)`}} ><span className={`${icon}`} style={{opacity: `${opacity}`}}></span></button>)}
			</div>
			<button onClick={() => mixing()}>mixing</button>
		</>
	)
}

export default Game

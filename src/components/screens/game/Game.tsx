import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState } from 'react'
import styles from './Game.module.scss'
import { gameData } from '@/components/screens/game/game.data';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import cn from 'classnames';


const Game: FC = () => {
	const {isGame} = useTypedSelector(state => state.game)

	console.log('re-render Game')
	const itemsRef = useRef<HTMLButtonElement[] | null[]>([null])
	const {mixing, showItem, gameplay} = useGame(itemsRef.current)

	useEffect(() => {
		if (isGame){
			itemsRef.current = itemsRef.current.slice(0, gameData.length);
		}
	}, []);

	return (
		<>
		<div className={styles.game}>
			{gameData.map(({id, icon, y, x, opacity, rotate}, index) => (
				<button  
					key={index} 
					ref={el => itemsRef.current[index] = el} 
					onClick={() => {isGame? showItem(`${index}`, id) : null}} 
					className={!isGame ? styles.gameItem2 : styles.gameItem}
					style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0) rotateY(${rotate}deg)`}}
					>
						<span 
							className={`${icon}`} 
							style={{opacity: `${opacity}`}}></span>
				</button>
			))}
		{/* <button onClick={() => mixing()}>mixing</button> */}
		
		</div>
		</>
		
	)
}

export default Game

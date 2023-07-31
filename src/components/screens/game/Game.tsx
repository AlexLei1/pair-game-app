import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef } from 'react'
import styles from './Game.module.scss'
import { gameData } from '@/components/screens/game/game.data';


// Array<HTMLButtonElement>

const Game: FC = () => {
	console.log('re-render Game')
	const itemsRef = useRef<HTMLButtonElement[] | null[]>([null])
	console.log(itemsRef)
	const {mixing, showItem, gameplay} = useGame(itemsRef.current)

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, gameData.length);
		console.log(itemsRef)
  }, []);

	return (
		<>
			<div className={styles.cube}>
				{gameData.map(({id, icon, y, x, opacity, rotate}, index) => (
					<button  
						key={index} 
						ref={el => itemsRef.current[index] = el} 
						onClick={() => showItem(`${index}`, id)} 
						className={styles.gameItem} 
						style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0) rotateY(${rotate}deg)`}}
						>
							<span 
								className={`${icon}`} 
								style={{opacity: `${opacity}`}}></span>
					</button>
				))}
			</div>
			<button onClick={() => mixing()}>mixing</button>
		</>
	)
}

export default Game

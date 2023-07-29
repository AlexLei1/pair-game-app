import React,{FC, useRef} from 'react'
import styles from './GameItem.module.scss'
import cn from 'classnames'


export interface IGameItem {
	id: number
	icon: string,
	y: number,
	x: number
	opacity: number,
	rotate: number,
	showItem: React.MouseEventHandler<HTMLButtonElement>
	index: string,
	itemsRef
}

const GameItem:FC<IGameItem> = ({id, icon, y, x, opacity, rotate, showItem, index, itemsRef}) => {

	return (
		<>
			<button
				key={index}
				ref={el => itemsRef.current[index] = el}
				className={styles.gameItem} 
				onClick={() => showItem()} 
				style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0) rotateY(${rotate}deg)`}} 
				>
				<span className={`${icon}`} style={{opacity: `${opacity}`}}></span>
			</button>
		</>
		
	)
}

export default GameItem
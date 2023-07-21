import {FC, useRef} from 'react'
import styles from './GameItem.module.scss'
import cn from 'classnames'
export interface IGameItem {
	icon: string,
	id: number,
	y: number,
	x: number
}

const GameItem:FC<IGameItem> = ({icon, id, y, x}) => {
	const ref = useRef();

	return (
		<div className={styles.gameItem} style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0)`}}  data-matrix-id={id}><span className={`${icon}`}></span></div>
	)
}

export default GameItem


//1 - если состояние game = false блокируем взаимодействие с элементом
//2 - при клике на item он открывается и сохраняет значение в хранилище
//3 - если состояние game меняется c false на true элемнт блокируется и закрывается 

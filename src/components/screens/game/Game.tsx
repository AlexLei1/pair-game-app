import GameItem from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState} from 'react'
import styles from './Game.module.scss'
import {gameData} from './game.data.js'

const Game: FC = () => {
	const [counter, setCounter] = useState(0);

	const getMatrix = (data) => {
		const matrix = [[], [], [], []]
		let y = 0
		let x = 0

		for(let i in data) {
			if (x >= 4) {
				y++
				x = 0
			}
			matrix[y][x] = data[i]
			x++
		}
		return matrix
	}
	let data = getMatrix(gameData)

	// const setPositionItems = (matrix) => {
	// 	for(let y = 0; y < matrix.length; y++) {
	// 		for(let x = 0; x < matrix[y].length; x++) {
	// 			const value = matrix[y][x];
	// 			const item = items[value - 1];
				
	// 		}
	// 	}
	// }


	
	return (
		<>
		<div className={styles.cube}>
			{/* {gameData.map(({id, icon, y, x}) => <GameItem id={id} icon={icon} y={y} x={x}/>)} */}
		</div>
		{/* <button onClick={() => mixing()}>mixing</button> */}
		</>
	)
}

export default Game

//1 - переходим на страницу игры, формируется поле из 16 элемнтов внутри куба
//1.1 - всем элементам игры нужно передать значение translate3D
//1.2 - написать функцию которая будет перемешивать матрицу
//1.3
//2 - при клике game = true активируется игра
import GameItem, { IGameItem } from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState} from 'react'
import styles from './Game.module.scss'
import {gameData} from './game.data.js'

export interface IGameData extends Array<IGameItem> {}

const Game: FC = () => {
	const [counter, setCounter] = useState(gameData);

	//? формирует матрицу из массива
	const getMatrix = (data:IGameData) => {
		const matrix = [[], [], [], []]
		let y = 0
		let x = 0
		console.log(data)
		for(let i in data) {
			if (x >= 4) {
				y++
				x = 0
			}
			matrix[y][x] = data[i]
			x++
		}
		console.log(matrix)
		return matrix
	}

	//? задает координаты X & Y ариентируясь на порядок в матрице
	const setPositionItems = (matrix) => { 
		for(let y = 0; y < matrix.length; y++) {
			for(let x = 0; x < matrix[y].length; x++) {
	
				matrix[y][x].x = x
				matrix[y][x].y = y
			}
		}
		
		return matrix
	}

	//? рандомно перемешивает массив
	// const shuffleArray = (arr) => {
	// 	return arr 
	// 		.map(value => ({value, sort: Math.random()}))
	// 		.sort((a, b) => a.sort - b.sort)
	// 		.map(({value}) => value)
	// }

	//? рандомно перемешивает массив
	// const shuffleArray = (array) => {
	// 	let currentIndex = array.length,  randomIndex;
	// 	// While there remain elements to shuffle.
	// 	while (currentIndex != 0) {
	// 		// Pick a remaining element.
	// 		randomIndex = Math.floor(Math.random() * currentIndex);
	// 		currentIndex--;
	// 		// And swap it with the current element.
	// 		[array[currentIndex], array[randomIndex]] = [
	// 			array[randomIndex], array[currentIndex]];
	// 	}
	// 	return array;
	// } 

	//? процедура перемешивания массива 
	// const mixing = () => {
	// 	const shuffledArray = shuffleArray(counter.map(item => item.id))
	// 	let matrix = getMatrix(shuffledArray);
	// 	setPositionItems(matrix);
	// }
	
	
	useEffect(() => {
		setCounter(setPositionItems(getMatrix(counter)))
	}, [])


	return (
		<>
			<div className={styles.cube}>
				{counter.map(({id, icon, y, x}) => <div className={styles.gameItem} style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0)`}}  data-matrix-id={id}><span className={`${icon}`}></span></div>)}
			</div>
			<button>mixing</button>
		</>
	)
}

export default Game

// 1 - рассавить элементы + добавить возможность перемешивать элемнты 
// 2 - 
// 3 - 
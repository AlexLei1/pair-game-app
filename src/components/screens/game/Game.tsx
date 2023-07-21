import GameItem from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState} from 'react'
import styles from './Game.module.scss'
import {gameData} from './game.data.js'

const Game: FC = () => {
	const [counter, setCounter] = useState(0);

	//? функция формирует матрицу из массива
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

	//? задает координаты X & Y
	const setPositionItems = (matrix) => {
		for(let y = 0; y < matrix.length; y++) {
			for(let x = 0; x < matrix[y].length; x++) {

				matrix[y][x].x = x
				matrix[y][x].y = y
			}
		}
	}
		//? рандомно перемешивает массив
	// const shuffleArray = (arr) => {
	// 	return arr 
	// 		.map(value => ({value, sort: Math.random()}))
	// 		.sort((a, b) => a.sort - b.sort)
	// 		.map(({value}) => value)
	// }

	//? рандомно перемешивает массив
	const shuffleArray = (array) => {
		let currentIndex = array.length,  randomIndex;
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}
		return array;
	} 

	//? функция для перемешивания массива 
	const mixing = () => {
		const shuffledArray = shuffleArray(gameData.map(item => item.id))
		let matrix = getMatrix(shuffledArray);
		setPositionItems(matrix);
	}
	

	useEffect(() => {
		setPositionItems(getMatrix(gameData.map(item => item.id)))
	}, [])

console.log(gameData)
	return (
		<>
		<div className={styles.cube}>
			{gameData.map(({id, icon, y, x}) => <GameItem key={id} id={id} icon={icon} y={y} x={x}/>)}
		</div>
		<button onClick={() => mixing()}>mixing</button>
		</>
	)
}

export default Game

// 1 - рассавить элементы + добавить возможность перемешивать элемнты 
// 2 - 
// 3 - 
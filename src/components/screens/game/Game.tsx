import GameItem, { IGameItem } from '@/components/ui/gameItem/GameItem'
import { useGame } from '@/hooks/useGame'
import {FC, useEffect, useRef, useState} from 'react'
import styles from './Game.module.scss'
import {gameData} from './game.data.js'

export interface IGameData extends Array<IGameItem> {}

const Game: FC = () => {
	const [counter, setCounter] = useState<IGameData>(gameData);

	//? формирует матрицу из массива
	const getMatrix = (data:IGameData) => {
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

	//? задает координаты X & Y ариентируясь на порядок в матрице
	const setPositionItems = (matrix) => { 
		for(let y = 0; y < matrix.length; y++) {
			for(let x = 0; x < matrix[y].length; x++) {
	
				matrix[y][x].x = x
				matrix[y][x].y = y
			}
		}
		return matrix.flat()
	}

	//? рандомно перемешивает массив
	const shuffleArray = (arr) => {
		return arr 
			.map(value => ({value, sort: Math.random()}))
			.sort((a, b) => a.sort - b.sort)
			.map(({value}) => value)
	}


	//? процедура перемешивания массива 
	const mixing = () => {
		const shuffledArray = shuffleArray(counter)
		let matrix = getMatrix(shuffledArray);
		setCounter(setPositionItems(matrix));
	}
	
	
	useEffect(() => {
		setCounter(setPositionItems(getMatrix(counter)))
	}, [])

	console.log(counter)
	return (
		<>
			<div className={styles.cube}>
				{counter.map(({id, icon, y, x}) => <div key={id} className={styles.gameItem} style={{transform:`translate3D(${x * 100}%, ${y * 100}%,  0)`}}  data-matrix-id={id}><span className={`${icon}`}></span></div>)}
			</div>
			<button onClick={() => mixing()}>mixing</button>
		</>
	)
}

export default Game

// 1 - рассавить элементы + добавить возможность перемешивать элемнты 
// 2 - 
// 3 - 
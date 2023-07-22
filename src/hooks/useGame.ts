import { IGameData } from '@/components/screens/game/Game';
import { useEffect, useState } from 'react';
import { IGameItem } from '@/components/ui/gameItem/GameItem';
import { gameData } from '@/components/screens/game/game.data';


export interface IGameData extends Array<IGameItem> {}

export const useGame = () => {
	const [counter, setCounter] = useState<IGameData>(gameData);
	const [isGame, setIsGame] = useState(false)
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
		let matrix = getMatrix(shuffledArray)
		setCounter(setPositionItems(matrix))
	}
	
	const game = () => {
		mixing()
		
	}

	useEffect(() => {
		setCounter(setPositionItems(getMatrix(counter)))
	}, [])


	return {counter, mixing, game, isGame}
}


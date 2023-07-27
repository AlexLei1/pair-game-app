import { useEffect, useState } from 'react';
import { IGameItem } from '@/components/ui/gameItem/GameItem';

export interface IGameData extends Array<IGameItem> {}

export const useGame = (arrItems) => {
	const [gameplay, setGameplay] = useState([])
	const [arrIdItem, setArrIdItem] = useState([])
	const [isPosition, setIsPosition] = useState(true)

	//? формирует матрицу из массива
	const getMatrix = (arr) => {
		const matrix = [[], [], [], []]
		let y = 0
		let x = 0

		for(let i in arr) {
			if (x >= 4) {
				y++
				x = 0
			}
			
			matrix[y][x] = arr[i]
			x++
		}
		
		return matrix
	}

	//? задает координаты X & Y ариентируясь на порядок в матрице
	const setPositionItems = (matrix) => { 
		for(let y = 0; y < matrix.length; y++) {
			for(let x = 0; x < matrix[y].length; x++) {

				matrix[y][x].style.transform = `translate3D(${x * 100}%, ${y * 100}%,  0)`;
				matrix[y][x].disabled = true
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



	const showItem = (index: string, id:number) => {
		for(let i in arrItems) {
			if (i === index) {
				arrItems[i].children[0].style.opacity = 1
				arrItems[i].disabled = true

				setGameplay((arr) => [...arr, id])
				setArrIdItem((arr) => [...arr, id])
			} 
		}
	}

	const hideItems = () => {
		for(let i in arrItems) {
			arrItems[i].children[0].style.opacity = 0
			arrItems[i].disabled = false
		}
	}

	//? процедура перемешивания массива 
	const mixing = () => {
		setPositionItems(getMatrix(shuffleArray(arrItems)))
	}

	// const gameRestart = () => {
		
	// }

	useEffect(() => {
		if((arrIdItem.length === 0) && isPosition) {
			setIsPosition(false)
			// setTimeout(() => mixing(), 1000)
			setTimeout(() => hideItems(), 1000)
		} else if ((arrIdItem.length !== 0) && gameplay.length % 2 === 0) {

			if (gameplay[0] === gameplay[1]) {
				console.log(true)
				setArrIdItem([])
			} else {
				console.log(false)
				setArrIdItem([])
			}
		}
		if (gameplay.length === 16){
			console.log('выйграли')
			setGameplay([])
		}
		console.log(gameplay)
	}, [gameplay])


	return {mixing, showItem}
}


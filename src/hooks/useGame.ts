import { useEffect, useState } from 'react';
import { IGameItem } from '@/components/ui/gameItem/GameItem';

export interface IGameData extends Array<IGameItem> {}

export const useGame = (arrItems) => {
	const [isGame, setIsGame] = useState(false)

	console.log(arrItems)
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

	const hideItem = (id) => {
		for(let i in arrItems) {
			if (i === id) {
				console.log(arrItems[i].style.opacity)
				arrItems[i].style.opacity = 0
				arrItems[i].style.transform = `rotateY(${180}deg) scaleX(-1)`
			} 
		}
	}

	//? процедура перемешивания массива 
	const mixing = () => {
		setPositionItems(getMatrix(shuffleArray(arrItems)))
	}

	//1 - перемешиваем элементы
	//2 - через 5 секунд скрываем элемнты и (visibal)
	//3 - даем возможность кликать на элементы
	//4 - при клике на элемент он открывается (visibal) & происходит проверка 
	const game = () => {
		mixing()


		// setTimeout(() =>  [2000])
	}

	useEffect(() => {
		setPositionItems(getMatrix(arrItems))
	}, [])


	return {mixing, game, isGame, hideItem}
}


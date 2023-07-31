import { useEffect, useState } from 'react';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface IUseGame {
	arrItems: HTMLButtonElement[] | null[]
}
export const useGame = (arrItems: HTMLButtonElement[]) => {
	console.log('re-render hook')
	const [gameplay, setGameplay] = useState<number[]>([])
	const [arrIdItem, setArrIdItem] = useState<number[]>([])
	const [isPosition, setIsPosition] = useState<boolean>(true)
	const {toggleBurger} = useActions()
	const {isGame} = useTypedSelector(state => state.game)

	//? формирует матрицу из массива
	const getMatrix = (arr: HTMLButtonElement[]) => {

		const matrix = [[], [], [], []]
		let y = 0
		let x = 0

		arr.forEach((item) => {
			if (x >= 4) {
				y++
				x = 0
			}
			matrix[y][x] = item
			x++
		})
		
		return matrix
	}

	//? задает координаты X & Y ариентируясь на порядок в матрице
	const setPositionItems = (matrix: HTMLButtonElement[][]) => { 
		for(let y = 0; y < matrix.length; y++) {
			for(let x = 0; x < matrix[y].length; x++) {
				matrix[y][x].style.transform = `translate3D(${x * 100}%, ${y * 100}%,  0)`;
			}
		}
		return matrix.flat()
	}

	//? рандомно перемешивает массив
	const shuffleArray = (arr: HTMLButtonElement[]) => {
		return arr 
			.map(value => ({value, sort: Math.random()}))
			.sort((a, b) => a.sort - b.sort)
			.map(({value}) => value)
	}

	console.log(arrItems)
	//? показать элемент
	const showItem = (index: string, id:number) => {
		arrItems[index].children[0].style.opacity = 1
		arrItems[index].disabled = true

		setGameplay((arr) => [...arr, id])
		setArrIdItem((arr) => [...arr, id])
	}

	//? скрывает все элемнты и дает возможность кликать
	const hideItems = () => {
		for(let i = 0; i <= 16; i++) {
			arrItems[i].children[0].style.opacity = 0
			arrItems[i].disabled = false
		}
	}

	//? блокирует все элемнты
	const disabledItems = () => {
		arrItems.forEach((item) => {
			item.disabled = true
		}) 
	}

	//? процедура перемешивания элемнтов игры 
	const mixing = () => {
		setPositionItems(getMatrix(shuffleArray(arrItems)))
	}


	useEffect(() => {
		if((arrIdItem.length === 0) && isPosition) {
			disabledItems()
			setIsPosition(false)
			// setTimeout(() => mixing(), 1000)
			setTimeout(() => hideItems(), 2000)
		} else if ((arrIdItem.length !== 0) && gameplay.length % 2 === 0) {

			if (arrIdItem[0] === arrIdItem[1]) {
				console.log(true)


				setArrIdItem([])
			} else {
				console.log(false)
				toggleBurger({isGame})

				setArrIdItem([])
			}
		}
		if (gameplay.length === 16){
			console.log('выйграли')
			toggleBurger({isGame})
			setGameplay([])
			
		}

	}, [gameplay])


	return {mixing, showItem, gameplay}
}


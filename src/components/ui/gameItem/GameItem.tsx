import {FC} from 'react'

interface IGameItem {
	value: string,
	id: string
}

const GameItem:FC<IGameItem> = (value, id) => {
	return (
		<div className={gameItem}><span></span></div>
	)
}

export default GameItem


//1 - если состояние game = false блокируем взаимодействие с элементом
//2 - при клике на item он открывается и сохраняет значение в хранилище
//3 - если состояние game меняется c false на true элемнт блокируется и закрывается 

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGame } from "types/types";

const initialState: IGame = {
	isGame: false
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		toggleGame: (state, {payload: isGame}: PayloadAction<IGame>) => {
			if (state.isGame === true) {
				state.isGame = false
			} else state.isGame = true
		}
	},
})

export const {actions, reducer} = gameSlice
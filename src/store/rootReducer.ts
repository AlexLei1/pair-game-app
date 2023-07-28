import { combineReducers } from "@reduxjs/toolkit";
import { reducer as gameReducer} from './game.slice'

export const reducers =  combineReducers({
	game: gameReducer
}) 
import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { filtredMoviesReducer } from "./filtredMoviesReducer"

export const rootReducer = combineReducers({
    moviesReducer,
    filtredMoviesReducer,
})
import { GET_MOVIES } from "./types"


const initialState = {
    movies: []
}

export const moviesReducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
        return {
            ...state,
            movies: action.data
        }
        default: return state
    }
}
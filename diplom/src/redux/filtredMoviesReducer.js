
import { GET_FILTRED_MOVIES, RESET_FILTRED_MOVIES } from "./types"
import { filterMovies, isCyrillic, filterDuration } from "../utils/moviesFunctions"

const initialState = {
    filtredMovies: [],
}

export const filtredMoviesReducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_FILTRED_MOVIES:            
        return (()=>{
            const { arr, setings, setLangOfSearch } = action;
            let newFilms = arr.filter(film => filterMovies(film, setings.word, isCyrillic(setings.word), setLangOfSearch));
            if (setings.btnValue) {
            newFilms = newFilms.filter(film => filterDuration(film));
            }
            return {
                ...state,
                filtredMovies: newFilms
            }
        })()
        case RESET_FILTRED_MOVIES:
        return {
            ...state,
            filtredMovies: []
        }
        default: return state
    }
}
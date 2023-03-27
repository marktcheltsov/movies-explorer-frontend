import { GET_MOVIES, GET_FILTRED_MOVIES, RESET_FILTRED_MOVIES } from "./types";


export function getMoviesData(data) {
    return {
        type: GET_MOVIES,
        data
    }
}


export function getFiltredMoviesData(arr, setings, setLangOfSearch) { 
    return {
        type: GET_FILTRED_MOVIES,
        arr,
        setings,
        setLangOfSearch,
    }
}

export function removeFiltredFilms() { 
    return {
        type: RESET_FILTRED_MOVIES,
    }
}
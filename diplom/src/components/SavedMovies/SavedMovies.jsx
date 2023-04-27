import { useState } from "react";
import { Route } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterDuration, filterMovies, isCyrillic } from "../../utils/moviesFunctions";
import Search from "../Search/Search";
import './SavedMovies.css'

function SavedMovies({path, onClickLikeMovie, onClickRemoveMovie, movies, setFiltredMovies, filtredMovies}) {
    const [langOfSearch, setLangOfSearch] = useState(true)
    const [errorFilms, setErrorFilms] = useState(true)
    const [errorFilmsText, setErrorFilmsText] = useState('')

    function filterCards(settings) {
        let newFilms = movies.filter(film => filterMovies(film, settings.word, isCyrillic(settings.word), setLangOfSearch));
        if (settings.btnValue) {
            newFilms = movies.filter(film => filterDuration(film));
        }
        if (newFilms.length === 0) {
            setErrorFilms(false);
            setErrorFilmsText('Ничего не найдено');
        } else {
            localStorage.setItem('saved-movies', JSON.stringify({settings: settings, movies: newFilms}))
            setFiltredMovies(newFilms)
            setErrorFilms(true);
            setErrorFilmsText('');
        }
    }

    return (
        <Route path={path}>
            <Search handleSubmitForm={filterCards} setingsName={'saved-movies'} movies={filtredMovies}></Search>
            {errorFilms ? (
                <MoviesCardList 
                movies={ filtredMovies } 
                onClickLikeMovie={ onClickLikeMovie } 
                langOfSearch={ langOfSearch } 
                onClickRemoveMovie={ onClickRemoveMovie }>
                </MoviesCardList>) : 
                (<div className="films__eror"><p className="films__error-container">{errorFilmsText}</p></div>)}
            <section className="saved-divider">
            </section>
        </Route>
    )
}

export default SavedMovies;
import { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterDuration, filterMovies, isCyrillic } from "../../utils/moviesFunctions";
import Search from "../Search/Search";
import './SavedMovies.css'
import { useEffect } from "react";

function SavedMovies({path, onClickLikeMovie, onClickRemoveMovie, movies, setFiltredMovies, filtredMovies}) {
    const [langOfSearch, setLangOfSearch] = useState(true)
    const [errorFilms, setErrorFilms] = useState(true)
    const [errorFilmsText, setErrorFilmsText] = useState('')
    const location = useLocation();
    const savedPath = location.pathname === "/saved-movies"

    function filterCards(data, settings) {
        let films = []
        if (settings.word.length === 0) {
            if (settings.btnValue) {
                films = data.filter(film => filterDuration(film))
            } else {
                films = data
            }
            if (films.length === 0) {
                setErrorFilms(false);
                setErrorFilmsText('Ничего не найдено');
            } else {
                setErrorFilms(true);
                setErrorFilmsText('');
            }
            return films
        }
        if (settings.btnValue) {
            films = data.filter(film => filterMovies(film, settings.word, isCyrillic(settings.word), setLangOfSearch)).filter(film => filterDuration(film));
        } else {
            films = data.filter(film => filterMovies(film, settings.word, isCyrillic(settings.word), setLangOfSearch));
        }
        if (films.length === 0) {
            setErrorFilms(false);
            setErrorFilmsText('Ничего не найдено');
        } else {
            setErrorFilms(true);
            setErrorFilmsText('');
        }
        return films
    }

    function handleForm(settings) {
        setFiltredMovies(filterCards(movies, settings))
    }

    useEffect(()=> {
        if (savedPath) {
            handleForm({word: '', btnValue: false})
        }
    }, [savedPath])

    return (
        <Route path={path}>
            <Search handleSubmitForm={handleForm} setingsName={'saved-movies'} movies={movies}></Search>
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
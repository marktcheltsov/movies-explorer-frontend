import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import myApi from "../../utils/MainApi";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterDuration, filterMovies, isCyrillic } from "../../utils/moviesFunctions";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import './SavedMovies.css'

function SavedMovies({movies, setMovies, path, onClickLikeMovie, onClickRemoveMovie}) {
    const [langOfSearch, setLangOfSearch] = useState(true)
    const [filtredMovies, setFiltredMovies] = useState([]);
    const [filterSetings, setFilterSetings] = useState({});
    const [errorFilms, setErrorFilms] = useState(true)
    const [errorFilmsText, setErrorFilmsText] = useState('')
    const [prelouder, setPrelouder] = useState(false)

    function filterCards(setings) {
        setErrorFilms(true);
        let newFilms = filtredMovies.filter(film => filterMovies(film, setings.word, isCyrillic(setings.word), setLangOfSearch));
        if (setings.btnValue) {
            newFilms = filtredMovies.filter(film => filterDuration(film));
        }
        console.log(newFilms, 2)
        if (newFilms.length === 0) {
            setErrorFilms(false);
            setErrorFilmsText('Ничего не найдено');
            return
        } else {
            setFiltredMovies(newFilms)
        }
    }

    useEffect(()=> {
        setPrelouder(true)
        myApi.getLikedMovies().then((res)=> {
            res.forEach(element => {
                element.liked = true
            });
            setFiltredMovies(res)
            setMovies(res)
            setPrelouder(false)
        }).catch((err)=>{
            console.log(err)
          })
    }, [])

    return (
        <Route path={path}>
            <Search getMovies={filterCards} setFilterSetings={setFilterSetings}></Search>
            {prelouder ? <Preloader></Preloader> : <></>}
            {errorFilms ? (<MoviesCardList movies={ movies } filterSetings={filterSetings} onClickLikeMovie={onClickLikeMovie} langOfSearch={langOfSearch} onClickRemoveMovie={onClickRemoveMovie}></MoviesCardList>) : (<div className="films__eror"><p className="films__error-container">{errorFilmsText}</p></div>)}
            <section className="saved-divider">
            </section>
        </Route>
    )
}

export default SavedMovies;
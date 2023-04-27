import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { getMoviesApi } from "../../utils/MoviesApi";
import { filterDuration, filterMovies, isCyrillic } from "../../utils/moviesFunctions";
import { useResize } from "../../utils/use-resize";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import './Movies.css'


function Movies({setMovies, path, onClickLikeMovie, onClickRemoveMovie}) {

    const [langOfSearch, setLangOfSearch] = useState(true);
    const [filtredMovies, setFiltredMovies] = useState([]);
    const [moreBtnState, setMoreBtnState] = useState(false);
    const [openedFilmsCounter, setOpenedFilmsCounter] = useState(0);
    const [errorFilm, setErrorFilm] = useState(true);
    const [errorFilmsText, setErrorFilmsText] = useState('');
    const [prelouder, setPrelouder] = useState(false);
    let moviesSize = useResize();

    function HandlefilterMovies(data, settings) {
        let films = []
        if (settings.btnValue) {
            films = data.filter(film => filterMovies(film, settings.word, isCyrillic(settings.word), setLangOfSearch)).filter(film => filterDuration(film));
        } else {
            films = data.filter(film => filterMovies(film, settings.word, isCyrillic(settings.word), setLangOfSearch));
        }
        if (films.length === 0) {
            setErrorFilm(false)
            setErrorFilmsText('Ничего не найдено')
        } else {
            setErrorFilm(true)
        }
        return films
    }

    function getMovies(settings) {
        if (settings.word.length === 0) {
            setErrorFilm(false)
            setErrorFilmsText('Нужно ввести ключевое слово')
        } else {
            setPrelouder(true)
            getMoviesApi()
              .then((res) => {
                setFiltredMovies(HandlefilterMovies(res, settings));
                if (moviesSize.width > 1150) {
                    setOpenedFilmsCounter(12);
                } else if (moviesSize.width <= 1150 && moviesSize.width > 720) {
                    setOpenedFilmsCounter(8);
                } else if (moviesSize.width <= 720 && moviesSize.width > 320) {
                    setOpenedFilmsCounter(5);
                }
                setMovies(res);
                localStorage.setItem('movies', JSON.stringify({settings: settings, movies: HandlefilterMovies(res, settings)}))
                setPrelouder(false)
              })
              .catch((err) => {
                setPrelouder(false)
                console.log(err);
              });
        }
      }

    function handleSubmitForm(settings) {
        getMovies(settings);
    }

    function handleBtnMoreClick() {
        if (openedFilmsCounter <= 3) {
            if (moviesSize.width > 1150) {
                setOpenedFilmsCounter(pref => pref + 3);
            } else if (moviesSize.width <= 1150 && moviesSize.width > 720) {
                setOpenedFilmsCounter(pref => pref + 2);
            } else if (moviesSize.width <= 720 && moviesSize.width > 320) {
                setOpenedFilmsCounter(pref => pref + 2);
            }
        } else {
            setOpenedFilmsCounter(pref => pref + 3);
        }
    }
    
    useEffect(()=> {
        const storg = JSON.parse(localStorage.getItem('movies'))
        if (storg) {
            setFiltredMovies(storg.movies)
            if (moviesSize.width > 1150) {
                setOpenedFilmsCounter(12);
            } else if (moviesSize.width <= 1150 && moviesSize.width > 720) {
                setOpenedFilmsCounter(8);
            } else if (moviesSize.width <= 720 && moviesSize.width > 320) {
                setOpenedFilmsCounter(5);
            }
        }
    },[])

    useEffect(()=> {
        if (filtredMovies.length > 3) {
            setMoreBtnState(true)
        }
    }, [filtredMovies])

    useEffect(()=> {
        if (filtredMovies.length <= openedFilmsCounter) {
          setMoreBtnState(false)
        }
    }, [openedFilmsCounter, filtredMovies])

  return (
    <Route path={path}>
        <Search handleSubmitForm={handleSubmitForm} setingsName={'movies'} movies={filtredMovies}></Search>
        {prelouder ? <div className="prelouder__container"><Preloader></Preloader></div> : <></>}
        {prelouder ? <></> : errorFilm ?
          (<MoviesCardList 
            movies={ filtredMovies }
            onClickLikeMovie={onClickLikeMovie} 
            langOfSearch={langOfSearch} 
            onClickRemoveMovie={onClickRemoveMovie} 
            getCards={true}
            counter={openedFilmsCounter}>
          </MoviesCardList>) : 
          (<div className="films__eror"><p className={`films__error-container`}>{errorFilmsText}</p></div>)}
          <section className={`more`}>
            {moreBtnState && errorFilm && !prelouder ? (<button className="more__button" onClick={handleBtnMoreClick}>Ещё</button>) : <section className="saved-divider"></section>}
          </section>
    </Route>
  );
}

export default Movies;
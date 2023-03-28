import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesApi } from "../../utils/MoviesApi";
import { filterDuration, filterMovies, isCyrillic, renderCardsOnClick, renderCardsOnSubmit } from "../../utils/moviesFunctions";
import { useResize } from "../../utils/use-resize";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import './Movies.css'
import { getMoviesData} from "../../redux/action";


function Movies({ movies, setMovies, path, onClickLikeMovie, onClickRemoveMovie}) {
  const [langOfSearch, setLangOfSearch] = useState(true)
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [filtredMoviesArr, setFiltredMoviesArr] = useState([]);
  const [filtredMoviesCounter, setFiltredMoviesCounter] = useState(0);
  const [filtredCardsLength, setFiltredCardsLength] = useState(0)
  const [filterSetings, setFilterSetings] = useState({});
  const [getCards, setGetCards] = useState(false)
  const [errorFilms, setErrorFilms] = useState(true)
  const [errorFilmsText, setErrorFilmsText] = useState('')
  const [prelouder, setPrelouder] = useState(false)



  const moviesState = useSelector(state => {
    const { moviesReducer } = state
    return moviesReducer.movies
  });  

  function cleanSettings() {
    setFiltredMoviesCounter(0);
    setFiltredMovies([])
  }

  let moviesSize = useResize()
  const dispatch = useDispatch()

function setSubmitFromCards(setings, arr) {
  console.log(arr)
  console.log(setings)

  localStorage.setItem('searchSettings', JSON.stringify(setings));
  let newFilms = arr.filter(film => filterMovies(film, setings.word, isCyrillic(setings.word), setLangOfSearch));
  if (setings.btnValue) {
    newFilms = newFilms.filter(film => filterDuration(film));
    setFiltredCardsLength(newFilms.length)
  }
  if (newFilms.length === 0) {
    setErrorFilms(false);
    setErrorFilmsText('Ничего не найдено');
    setGetCards(false)
    return
  }
  if (newFilms.length !== 0) {
    setFiltredMoviesArr(newFilms)
    setFiltredCardsLength(newFilms.length)
    renderCardsOnSubmit(newFilms, filtredMovies, setFiltredMovies, filtredMoviesCounter, setFiltredMoviesCounter, moviesSize);
    setErrorFilms(true);
    setGetCards(true)
  }
}

useEffect(()=> {
  if (moviesSize.width > 1150 && filtredMovies.length < 3) {
    setGetCards(false)
  } else if (moviesSize.width <= 1150 && moviesSize.width > 720 && filtredMovies.length < 2) {
    setGetCards(false)
  } else if (moviesSize.width <= 720 && moviesSize.width > 320 && filtredMovies.length < 1) {
    setGetCards(false)
  }
}, [filtredMovies])

useEffect(()=> {
  if (filtredCardsLength <= filtredMoviesCounter) {
    setGetCards(false)
  }
}, [filtredMoviesCounter])


function setCards() {
    renderCardsOnClick(filtredMoviesArr, filtredMovies, setFiltredMovies, filtredMoviesCounter, setFiltredMoviesCounter, moviesSize);
}

  useEffect(()=> {
    const moviesStorage = JSON.parse(localStorage.getItem('movies'));
    const setingsStorage = JSON.parse(localStorage.getItem('searchSettings'));
    if (moviesStorage) {
      if (moviesStorage.length !== 0) {
        setFilterSetings(setingsStorage)
        setGetCards(false)
        setSubmitFromCards(setingsStorage, moviesStorage);
        setMovies(moviesStorage);
        dispatch(getMoviesData(moviesStorage));
      }
    }

  }, [])

  function getMovies(setings) {
    cleanSettings()
    setPrelouder(true)
    if (moviesState.length !== 0) {
      setSubmitFromCards(setings, moviesState)
      setPrelouder(false)
    } else {
      getMoviesApi().then((res)=> {
        dispatch(getMoviesData(res));
        setSubmitFromCards(setings, res)
        setPrelouder(false)
      }).catch((err)=> {
        setErrorFilms(false);
        setPrelouder(false);
        setErrorFilmsText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
    }
  }

  return (
    <Route path={path}>
          <Search filterCards={getMovies} getMovies={getMovies}></Search>
          {prelouder ? <div className="prelouder__container"><Preloader></Preloader></div> : <></>}
          {errorFilms ? (<MoviesCardList movies={ filtredMovies } filterSetings={filterSetings} onClickLikeMovie={onClickLikeMovie} langOfSearch={langOfSearch} onClickRemoveMovie={onClickRemoveMovie} getCards={getCards}></MoviesCardList>) : (<div className="films__eror"><p className={`films__error-container ${prelouder ? 'films__error-container_prelouder-active' : ''}`}>{errorFilmsText}</p></div>)}
          <section className={`more ${prelouder ? 'more_prelouder-active' : ''}`}>
            { getCards && errorFilms ? (<button className="more__button" onClick={()=> {
              setCards(filterSetings, movies)
            }}>Ещё</button>) : <></>}
          </section>
    </Route>
  );
}

export default Movies;
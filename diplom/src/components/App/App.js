import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, Redirect, useHistory } from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import myApi from "../../utils/MainApi";
import CurrentUserContext from "../../utils/UserContext";

function App() {
  const [sliderMenuOpen, setSliderMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({});
  const [filtredSavedMovies, setFiltredSavedMovies] = useState([]);
  const [profileCorrect, setProfileCorrect] = useState(false)
  const location = useLocation();
  const history = useHistory();

  function onClickLikeMovie(film) {
    const storg = JSON.parse(localStorage.getItem('movies'))
    if (storg) {
    let films = storg.movies
      films.forEach(element => {
            if (film.id === element.id) {
                element._id = film._id
                element.WasLiked = true
            }
    });
    localStorage.setItem('movies', JSON.stringify({settings: storg.settings, movies: films}))
    }
    film.WasLiked = true
    setFiltredSavedMovies([film, ...filtredSavedMovies])
    setLikedMovies([film, ...likedMovies])
  }

  function onClickRemoveMovie(film) {
    const storg = JSON.parse(localStorage.getItem('movies'))
    if (storg) {
    let films = storg.movies
      films.forEach(element => {
            if (film.id === element.id || film.movieId === element.id) {
                element._id = film._id
                element.WasLiked = false
            }
    });
    if (location.pathname === "/saved-movies") {
      movies.forEach(element => {
        if (film.id === element.id || film.movieId === element.id) {
            element._id = film._id
            element.WasLiked = false
        }
    });
    filtredMovies.forEach(element => {
      if (film.movieId === element.id) {
          element._id = film._id
          element.WasLiked = false
      }
    });
    }
    localStorage.setItem('movies', JSON.stringify({settings: storg.settings, movies: films}))
    }
    film.WasLiked = false
    setFiltredSavedMovies((item) => item.filter((element) => element.id !== film.id));
    setLikedMovies((item) => item.filter((element) => element.id !== film.id));
  }

  function onClickProfileExitLink() {
    localStorage.clear()
    setLoggedIn(false)
    setLikedMovies([])
    setFiltredSavedMovies([])
  }

  function handleSubmitForm(data) {
      if (!profileCorrect) {
        myApi.updateUser(data.name, data.email)
        .then((res)=> {
          setСurrentUser(res)
          setProfileCorrect(true)
          setTimeout(() => {
            setProfileCorrect(false)
          }, 1500);
        })
        .catch((e => console.log(e)))
      }
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) { 
      setLoggedIn(false);
    } else {
      history.push("/movies")
      setLoggedIn(true)
      myApi.getUserInfoFromServer()
        .then((res)=> {
        setСurrentUser(res);
      }).catch((err)=>{
        console.log(err)
      })
      myApi.getLikedMovies().then((res)=> {
        res.forEach(element => {element.liked = true});
        res.forEach(element => {element.id = element.movieId});
        setFiltredSavedMovies(res)
        setLikedMovies(res)
    }).catch((err)=>{
        console.log(err)
      })
    }
    }, [loggedIn]);

  function protectRoute() {
  if (location.pathname === "/") {
    return true
  } else if (location.pathname === "/movies") {
    return true
  } else if (location.pathname === "/saved-movies") {
    return true
  } else if (location.pathname === "/profile") {
    return true
  } else if (location.pathname === "/signup") {
    return true
  } else if (location.pathname === "/signin") {
    return true
  } else {
    return (
      <Redirect to="not-found"/>
    )
  }
  }

  function openSliderMenu() {
    setSliderMenuOpen(!sliderMenuOpen)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <Header openSliderMenu={ openSliderMenu } sliderMenuOpen={ sliderMenuOpen } loggedIn={loggedIn}></Header>
      <main>
        <ProtectedRoute 
          component={Movies}
          setMovies={setMovies}
          movies={movies}
          path="/movies"
          loggedIn={loggedIn}
          onClickLikeMovie={onClickLikeMovie}
          onClickRemoveMovie={onClickRemoveMovie}
          likedMovies={filtredSavedMovies}
          filtredMovies={filtredMovies}
          setFiltredMovies={setFiltredMovies}>
        </ProtectedRoute>
        <ProtectedRoute 
          component={Profile}
          path="/profile"
          handleSubmitForm={handleSubmitForm}
          loggedIn={loggedIn}
          onClickProfileExitLink={onClickProfileExitLink}
          profileCorrect={profileCorrect}>
        </ProtectedRoute>
        <ProtectedRoute 
          component={SavedMovies}
          setMovies={setLikedMovies}
          movies={likedMovies}
          path="/saved-movies"
          loggedIn={loggedIn}
          onClickLikeMovie={onClickLikeMovie}
          onClickRemoveMovie={onClickRemoveMovie}
          setFiltredMovies={setFiltredSavedMovies}
          filtredMovies={filtredSavedMovies}>
        </ProtectedRoute>
      <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/signup">
            <Register setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path="/signin">
            <Login setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path="/not-found">
            <NotFound/>
          </Route>
          {protectRoute()}
      </Switch>
      </main>
      <Footer></Footer>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
     
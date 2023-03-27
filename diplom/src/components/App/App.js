import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import React, { useState, useEffect, createContext } from "react";
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
  const [likedMovies, setLikedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({});
  
  const location = useLocation();
  const history = useHistory();

  function onClickLikeMovie(film) {
    setLikedMovies([film, ...likedMovies])
  }

  function onClickRemoveMovie(film) {
    setLikedMovies((item) =>
    item.filter((element) => element !== film)
    );
  }

  function onClickProfileExitLink() {
    localStorage.removeItem('token');
    setLoggedIn(false)
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) { 
      setLoggedIn(false);
    } else {
      history.push("/movies")
      setLoggedIn(true)
      myApi.getUserInfoFromServer().then((res)=> {
        setСurrentUser(res);
      }).catch((err)=>{
        console.log(err)
      })
    }
    }, []);

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
          onClickRemoveMovie={onClickRemoveMovie}>
        </ProtectedRoute>
        <ProtectedRoute 
          component={Profile}
          path="/profile"
          loggedIn={loggedIn}
          onClickProfileExitLink={onClickProfileExitLink}>
        </ProtectedRoute>
        <ProtectedRoute 
          component={SavedMovies}
          setMovies={setLikedMovies}
          movies={likedMovies}
          path="/saved-movies"
          loggedIn={loggedIn}
          onClickLikeMovie={onClickLikeMovie}
          onClickRemoveMovie={onClickRemoveMovie}>
        </ProtectedRoute>
      <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/signup">
            <Register/>
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
     
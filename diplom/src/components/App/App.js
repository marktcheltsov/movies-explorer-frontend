import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import React, { useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [ sliderMenuOpen , setSliderMenuOpen ] = useState(false);

  const location = useLocation()

  function protectRout() {
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
    console.log(sliderMenuOpen)
  }

  return (
    <div className="page">
      <Header openSliderMenu={ openSliderMenu } sliderMenuOpen={ sliderMenuOpen }></Header>
      <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/movies">
            <Movies/>
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/signup">
            <Register/>
          </Route>
          <Route exact path="/signin">
            <Login/>
          </Route>
          <Route exact path="/not-found">
            <NotFound/>
          </Route>
          {protectRout()}
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
 
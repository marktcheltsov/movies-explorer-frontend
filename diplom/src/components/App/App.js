import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../../SavedMovies/SavedMovies";

function App() {
  const [ sliderMenuOpen , setSliderMenuOpen ] = useState(false);

  function openSliderMenu() {
    setSliderMenuOpen(!sliderMenuOpen)
    console.log(sliderMenuOpen)
  }

  return (
    <div className="page">
      <Header openSliderMenu={ openSliderMenu } sliderMenuOpen={ sliderMenuOpen } ></Header>
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
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
 
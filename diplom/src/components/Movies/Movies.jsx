import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import './Movies.css'


function Movies() {
  return (
    <>
    <Search></Search>
    <MoviesCardList></MoviesCardList>
    <section className="more">
        <button className="more__button">Ещё</button>
    </section>
    </>
    //<Preloader></Preloader>
  );
}

export default Movies;

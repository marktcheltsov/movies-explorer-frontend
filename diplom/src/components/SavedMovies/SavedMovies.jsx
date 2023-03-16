import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import './SavedMovies.css'

function SavedMovies() {
    return (
        <>
            <Search></Search>
            <MoviesCardList></MoviesCardList>
            <section className="saved-divider">
            </section>
        </>
    )
}

export default SavedMovies;
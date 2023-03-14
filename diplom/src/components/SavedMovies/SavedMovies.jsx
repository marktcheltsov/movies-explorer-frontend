import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import Search from "../components/Search/Search";
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
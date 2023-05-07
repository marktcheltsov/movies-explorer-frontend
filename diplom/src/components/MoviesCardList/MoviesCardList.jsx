import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import { useEffect, useState } from 'react';

function MoviesCardList({movies, onClickLikeMovie, langOfSearch, onClickRemoveMovie, getCards, counter}) {
    const [zeroMovies, setZeroMovies] = useState(true)

    useEffect(()=> {
        console.log(movies)
        if (movies) {
            if (movies.length === 0) {
                setZeroMovies(true)
            } else {
                setZeroMovies(false)
            }
        }   
    }, [movies])

    return (
        <section className={`films ${getCards ? '' : 'films_btn-disabled'} ${zeroMovies ? 'films_zero-films' : ''}`}>
            {movies ? movies.slice(0, counter).map((film, i) => (
                <MoviesCard key={i} time={film.duration} img={film.image} data={film} onClickLikeMovie={onClickLikeMovie} langOfSearch={langOfSearch} onClickRemoveMovie={onClickRemoveMovie}></MoviesCard>
            )) : <></>
            }
        </section>
)
}

export default MoviesCardList;
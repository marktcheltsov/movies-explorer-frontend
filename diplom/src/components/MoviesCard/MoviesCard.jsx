import './MoviesCard.css'
import cardImage from '../../img/films/films1.jfif'
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';

function MoviesCard() {
    //пока захордкорю через хуки, пока не будет работать апи
    let location = useLocation();
    const [isliked, setIsliked] = useState(false);
    const islikedCard = location.pathname === '/saved-movies'

    function cardAddLike() {
        setIsliked(!isliked)
    }

    return (
        <div className="film">
            <div className="film__description">
                <div className="film__description-text-container">
                    <p className="film__description-name">33 слова о дизайне</p>
                    <p className="film__description-time">1ч 47м</p>
                </div>
                <div className={`film__description-like-btn ${isliked ? 'film__description-like-btn_active' : ''} ${islikedCard ? 'film__description-like-btn_delete' : ''}`} onClick={cardAddLike}></div>
            </div>
            <img src={cardImage} alt="фильм" className="film__image"/>
        </div>
    )
}

export default MoviesCard;

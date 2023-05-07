import './MoviesCard.css'
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import myApi from '../../utils/MainApi';

function MoviesCard({time, img, data, onClickLikeMovie, langOfSearch, onClickRemoveMovie}) {
    let location = useLocation();
    const [isliked, setIsliked] = useState(false);
    const islikedCard = location.pathname === '/saved-movies'

    function AddLikeCard() {
            myApi.likeMovie(data).then((res)=> {
                data._id = res._id
                setIsliked(true)
                onClickLikeMovie(data)
            }).catch((err)=>{
                console.log(err)
              })
    }

    function removeLikeCard() {
        myApi.deleteLikeMovie(data._id).then((res)=> {
            data.liked = false
            setIsliked(false)
            onClickRemoveMovie(data)
        }).catch((err)=>{
            console.log(err)
          })
    }

    function renderLikeFunction() {
        if (islikedCard) {
            removeLikeCard()
        } else {
            if (isliked || data.WasLiked) {
                console.log('dd')
                removeLikeCard()
            } else {
                AddLikeCard()
            }
        }
    }

    function filterTime(time) {
        const min = time % 60;
        if (min !== 0) {
            const hours = (time - min) / 60;
            if (hours === 0) {
                return `${min + 'м'}`
            } else {
                return `${hours + 'ч'} ${min + 'м'}`
            }
        } else {
            const hours = time / 60;
            return `${hours + 'ч'}`
        }
    }

    return (
        <div className="film">
            <div className="film__description">
                <div className="film__description-text-container">
                    <p className="film__description-name">{langOfSearch ? data.nameRU : data.nameEN}</p>
                    <p className="film__description-time">{filterTime(time)}</p>
                </div>
                <div className={`film__description-like-btn ${isliked || data.WasLiked ? 'film__description-like-btn_active' : ''} ${islikedCard ? 'film__description-like-btn_delete' : ''}`} onClick={renderLikeFunction}></div>
            </div>
            <a href={data.trailerLink} target="_blank"><img src={`${data.liked ? img : `${`https://api.nomoreparties.co${img.url}`}`}`} alt="фильм" className="film__image"/></a>
        </div>
    )
}

export default MoviesCard;

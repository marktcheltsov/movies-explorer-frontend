import { Promise } from "core-js";

 class Api {
    constructor(options) {
        this._token = options.token;
        this._address = options.address;
    }

    _checkResult() {
    return  (res) => {
        if (res.status === 200) {
            return res.json();
          }
          return Promise.reject(res.status);
      }
    }

    getLikedMovies() {
        return fetch(`${this._address}/movies`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res)=> {
            return res
        }).then(this._checkResult())
    }

    likeMovie(data) {
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameEN: data.nameEN,
                nameRU: data.nameRU,
                movieId: data.id,
                thumbnail: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                image: `https://api.nomoreparties.co${data.image.url}`,
                description: data.description,
                year: data.year,
                duration: data.duration,
                director: data.director,
                country: data.country,
            })
        }).then((res)=> {
            return res
        }).then(this._checkResult())
    }

    deleteLikeMovie(id) {
        return fetch(`${this._address}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        }).then((res)=> {
            return res
        }).then(this._checkResult())
    }
    
    getUserInfoFromServer() {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res)=> {
            return res
        }).then(this._checkResult())
    }

    updateUser(name, email) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:  name,
                email: email
            })
        }).then((res)=> {
            return res
        }).then(this._checkResult())
    }


}
const setings = {
  address: 'https://diplomamarkuhaaa.nomoredomains.work',
  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1OWNhOTBkODZiMzk3YTc3YmExZjMiLCJpYXQiOjE2NzkxMzgwMDcsImV4cCI6MTY3OTc0MjgwN30.Z9uTHLXTPk_KhGu1UZfYZ6RkhUgUftVfK0xqjkROI1E'
}
const myApi = new Api(setings)
export default myApi

//country
//director
//duration
//year
//description
//image
//trailerLink
//thumbnail
//movieId
//nameRU
//nameEN
import { Promise } from "core-js";

 class Api {
    constructor(options) {
        this._address = options.address;
    }

    getLikedMovies() {
        return fetch(`${this._address}/movies`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res)=> {
            if (res.status === 200) {
                return res.json();
              }
              return Promise.reject(res.status);
        })
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
            if (res.status === 200) {
                return res.json();
              }
              return Promise.reject(res.status);
        })
    }

    deleteLikeMovie(id) {
        return fetch(`${this._address}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        }).then((res)=> {
            if (res.status === 200) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }
    
    getUserInfoFromServer() {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res)=> {
            if (res.status === 200) {
                return res.json();
              }
              return Promise.reject(res.status);
        })
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
            if (res.status === 200) {
                return res.json();
              }
              return Promise.reject(res.status);
        })
    }
}

const setings = {
  address: 'https://diplomamarkuhaaa.nomoredomains.work',
}

const myApi = new Api(setings)

export default myApi

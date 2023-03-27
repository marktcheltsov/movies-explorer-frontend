import { Promise } from "core-js";


function checkResult() {
    return  (res) => {
        if (res.status === 200) {
            return res.json();
          }
          return Promise.reject(res.status);
      }
    }

export function getMoviesApi() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies').then(checkResult())
}
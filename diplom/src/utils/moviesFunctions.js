export function filterMovies(film, word, lang, setLangOfSearch) {
  if (lang === 'RU') {
    const isTextHasWord = film.nameRU.toLowerCase().includes(word.toLowerCase());
    if (isTextHasWord) {
      setLangOfSearch(true)
      return true
    } else {
      return false
    }
  }
  if (lang === 'ENG') {
    const isTextHasWord = film.nameEN.toLowerCase().includes(word.toLowerCase());
    if (isTextHasWord) {
      setLangOfSearch(false)
      return true
    } else {
      return false
    }
  }
  return false
}

export function isCyrillic(str) {
  if (str) {
  const res = /[а-я]/i.test(str.toLowerCase());
  if (res) {
    return 'RU'
  } else if (!res) {  
    return 'ENG'
  }
  }
}

export function filterDuration(film) {
  if (film.duration <= 40) {
    return true
  } else {
    return false
  }
}

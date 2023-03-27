export function filterMovies(film, word, lang, setLangOfSearch) {
  if (lang === 'RU') {
    const isTextHasWord = film.nameRU.toLowerCase().split(' ').includes(word.toLowerCase());
    if (isTextHasWord) {
      setLangOfSearch(true)
      return true
    } else {
      return false
    }
  }
  if (lang === 'ENG') {
    const isTextHasWord = film.nameEN.toLowerCase().split(' ').includes(word.toLowerCase());
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

export function renderCardsOnClick(arr, state, setState, counter, setCounter, moviesSize) {
  if (arr.length < 3) { 
    if (arr.length === 2) {
      setState([arr[0], arr[1]])
    } else {
      setState([arr[0]])
    }
  } else {
  if (moviesSize.width > 1150) {
    if (arr.length % 3 === 1) {
      if (arr.length - 1 === counter) {
        setState([...state, arr[counter]])
        setCounter(counter + 1)
      } else {
        setState([...state, arr[counter], arr[counter + 1], arr[counter + 2]])
        setCounter(counter + 3)
      }
    } else if (arr.length % 3 === 2) {
      if (arr.length - 2 === counter) {
        setState([...state, arr[counter]], arr[counter + 1])
        setCounter(counter + 2)
      } else {
        setState([...state, arr[counter], arr[counter + 1], arr[counter + 2]])
        setCounter(counter + 3)
      }
    } else {
      setState([...state, arr[counter], arr[counter + 1], arr[counter + 2]])
        setCounter(counter + 3)
    }
  } else if (moviesSize.width <= 1150 && moviesSize.width > 720) {
    if (arr.length % 2 === 1) {
      if (arr.length - 1 === counter) {
        setState([...state, arr[counter]])
        setCounter(counter + 1)
    } else {
      setState([...state, arr[counter], arr[counter + 1]])
      setCounter(counter + 2)
    }
  } else {
    setState([...state, arr[counter], arr[counter + 1]])
    setCounter(counter + 2)
  }
  } else if (moviesSize.width <= 720 && moviesSize.width > 320) {
    setState([...state, arr[counter]])
    setCounter(counter + 1)
  }
}
}

export function renderCardsOnSubmit(arr, state, setState, counter, setCounter, moviesSize) {
  if (arr.length < 3) { 
    if (arr.length === 2) {
      setState([arr[0], arr[1]])
    } else {
      setState([arr[0]])
    }
  } else {
  if (moviesSize.width > 1150) {
    if (counter < 3) {
      setState([...state, arr[counter], arr[counter + 1], arr[counter + 2]])
      setCounter(counter + 3)
    }
  } else if (moviesSize.width <= 1150 && moviesSize.width > 720) {
    if (counter < 2) {
      setState([...state, arr[counter], arr[counter + 1]])
      setCounter(counter + 2)
    }
  } else if (moviesSize.width <= 720 && moviesSize.width > 320) {
    if (counter < 1) {
      setState([...state, arr[counter]])
      setCounter(counter + 1)
    }
  }
}
}
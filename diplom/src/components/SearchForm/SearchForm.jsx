function SearchForm({setInputValue, inputValue, formSubmitHandle}) {
    function handleInput(e) {
        setInputValue(e.target.value)
    }
    
    return (
        <form className="search__form" onSubmit={formSubmitHandle}>
            <input type="text" className="search__input" placeholder="Фильм" value={inputValue} onChange={handleInput}/>
            <button type="submit" className="search__submit-btn"></button>
        </form>
    )
}

export default SearchForm;


function FilterCheckbox() {
    return (
        <div className="search__filter-container">
        <label class="search__filter-btn">
            <input type="checkbox" class="search__filter-btn-input"/>
            <span class="search__filter-btn-slider"></span>
        </label>
        <p className="search__filter-text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;
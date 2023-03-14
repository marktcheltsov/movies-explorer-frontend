
import searchLogo from '../../img/icons/search_icon.png'
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Search() {
return (
    <section className="search">
        <div className="search__input-container">
            <img src={searchLogo} alt="иконка" className="search__input-icon"/>
            <SearchForm></SearchForm>
        </div>
        <FilterCheckbox></FilterCheckbox>
    </section>
)
}

export default Search;
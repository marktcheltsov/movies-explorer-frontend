
import searchLogo from '../../img/icons/search_icon.svg';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';

function Search({filterCards, getMovies}) {
    const [inputValue, setInputValue] = useState('');
    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(()=> {
        const setings = JSON.parse(localStorage.getItem('searchSettings'));
        if (setings) {
            console.log(setings)
            setCheckBoxValue(setings.btnValue);
            setInputValue(setings.word);
        };
      }, []);

    function handleChexBox() {
        if (checkBoxValue) {
            setCheckBoxValue(false);
        } else {
            setCheckBoxValue(true);
        };
    };

    function formSubmitHandle(e) {
        e.preventDefault();
        getMovies({word: inputValue, btnValue: checkBoxValue});
    };
    
return (
    <section className="search">
        <div className="search__input-container">
            <img src={searchLogo} alt="иконка" className="search__input-icon"/>
            <SearchForm setInputValue={setInputValue} inputValue={inputValue} formSubmitHandle={formSubmitHandle} filterCards={filterCards}></SearchForm>
        </div>
        <FilterCheckbox handleChexBox={handleChexBox} checkBoxValue={checkBoxValue}></FilterCheckbox>
    </section>
);
};

export default Search;
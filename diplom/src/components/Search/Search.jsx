
import searchLogo from '../../img/icons/search_icon.svg';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';

function Search({ handleSubmitForm, setingsName, movies }) {
    const [inputValue, setInputValue] = useState('');
    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(()=> {
        const storg = JSON.parse(localStorage.getItem(setingsName))
        if (storg) {
            if (storg.settings) {
            setCheckBoxValue(storg.settings.btnValue);
            setInputValue(storg.settings.word);
            }
        };
      }, []);

    function handleChexBox() {
        if (checkBoxValue) {
            setCheckBoxValue(false);
            if (movies.length !== 0) {
                handleSubmitForm({word: inputValue, btnValue: false})
            }
        } else {
            setCheckBoxValue(true);
            if (movies.length !== 0) {
                handleSubmitForm({word: inputValue, btnValue: true})
            }
        };
    };

    function formSubmitHandle(e) {
        e.preventDefault();
        handleSubmitForm({word: inputValue, btnValue: checkBoxValue})
    };
    
return (
    <section className="search">
        <div className="search__input-container">
            <img src={searchLogo} alt="иконка" className="search__input-icon"/>
            <SearchForm setInputValue={setInputValue} inputValue={inputValue} formSubmitHandle={formSubmitHandle}></SearchForm>
        </div>
        <FilterCheckbox handleChexBox={handleChexBox} checkBoxValue={checkBoxValue}></FilterCheckbox>
    </section>
);
};

export default Search;
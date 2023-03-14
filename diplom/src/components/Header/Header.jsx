import "./Header.css"
import {Link,  useLocation } from "react-router-dom";
import React from "react";
import Navigation from "../Navigation/Navigation";


function Header({openSliderMenu, sliderMenuOpen}) {
    let location = useLocation()
    const renderHeader = () => {
        if (location.pathname === '/signin' || location.pathname === '/signup') {
            return (
                <header className={`header header_small`}>
                    <div className="header__menu-logo"></div>
                </header>
            )
        } else if (location.pathname === '/') {
            return(
                <header className={`header`}>
                    <div className="header__menu"> 
                        <div className="header__menu-logo"></div>
                    </div>
                    <div className="header__bts-container">
                        <Link to="/signup"><button className="header__register-btn">Регистрация</button></Link>
                        <Link to="/signin"><button className="header__login-btn">Войти</button></Link>
                    </div>
                </header>
            )
        }
        else {
            return (
                <header className={`header`}>
                <div className="header__menu"> 
                <div className="header__menu-logo"></div>
                    <div className={`header__menu-links-container ${sliderMenuOpen ? 'header__menu-links-container_slider-opened' : ''}`}>
                        <Navigation isOpened={sliderMenuOpen} closeSlider={openSliderMenu}></Navigation>
                    </div>
                </div>
                    <div class={`header__menu-burger ${sliderMenuOpen ? 'header__menu-burger_slider-opened' : ''}`} onClick={openSliderMenu}>
                        <span class="header__menu-burger-item"></span>
                        <span class="header__menu-burger-item"></span>
                        <span class="header__menu-burger-item"></span>
                    </div>
            </header>
            )
        }
    }


    return (
        renderHeader()  
    )
}

export default Header;
//<Link to="/profile"><button className="header__profile-btn">Аккаунт</button></Link>
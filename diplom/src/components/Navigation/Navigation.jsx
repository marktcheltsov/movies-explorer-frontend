import { Link, useLocation } from "react-router-dom";

function Navigation({ isOpened, closeSlider }) {
    let location = useLocation()
    function renderNav() {
        if (location.pathname === "/movies") {
            return (
                <>
                    <Link to="/" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Главная</li></Link>
                    <Link to="/movies" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Фильмы</li><div className="header__menu-link-text-active"></div></Link>
                    <Link to="/saved-movies" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Сохранённые фильмы</li></Link>
                </>
            )
        } else if (location.pathname === "/saved-movies") {
            return (
                <>
                    <Link to="/" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Главная</li></Link>
                    <Link to="/movies" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Фильмы</li></Link>
                    <Link to="/saved-movies" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Сохранённые фильмы</li><div className="header__menu-link-text-active"></div></Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Главная</li></Link>
                    <Link to="/movies" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Фильмы</li></Link>
                    <Link to="/saved-movies" className="header__menu-link"><li className="header__menu-link-text" onClick={closeSlider}>Сохранённые фильмы</li></Link>
                </>
            )
        }
    }
    return (
            <nav className={`header__menu-links ${isOpened ? 'header__menu-links_slider-opened' : ''}`}>
                <ul className="header__menu-list">
                    {renderNav()}
                </ul>
                <Link to="/profile"><button class="header__profile-btn" onClick={closeSlider}>Аккаунт</button></Link>
            </nav>
    )
}

export default Navigation;
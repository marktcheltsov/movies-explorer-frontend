import { Link } from "react-router-dom";
import './Login.css'

function Login() {
    return (
        <section className="sign">
            <h2 className="sign__title">Рады видеть!</h2>
            <form className="sign__form">
                <label for="" className="sign__label">
                    E-mail
                    <input type="text" className="sign__input"/>
                </label>
                <label for="" className="sign__label">
                    Пароль
                    <input type="text" className="sign__input"/>
                </label>
            </form>
            <button className="sign__submit-btn">Войти</button>
            <span className="sign__link-description">Ещё не зарегистрированы?<Link to="/signup" className="sign__link">Регистрация</Link></span>
        </section>
    )
}

export default Login
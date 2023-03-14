import './Register.css';
import { Link } from "react-router-dom";

function Register() {

    return (
        <section className="sign">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <form className="sign__form">
                <label for="" className="sign__label">
                    Имя
                    <input type="text" className="sign__input"/>
                </label>
                <label for="" className="sign__label">
                    E-mail
                    <input type="text" className="sign__input"/>
                </label>
                <label for="" className="sign__label">
                    Пароль
                    <input type="text" className="sign__input"/>
                </label>
            </form>
            <button className="sign__submit-btn">Зарегистрироваться</button>
            <span className="sign__link-description">Уже зарегистрированы?<Link to="/signin" className="sign__link">Войти</Link></span>
        </section>
    )
}

export default Register
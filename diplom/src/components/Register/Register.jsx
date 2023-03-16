import './Register.css';
import { Link } from "react-router-dom";
import SignForm from '../SignForm/SignForm';

function Register() {

    return (
        <section className="sign">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <SignForm btnText="Зарегистрироваться"></SignForm>
            <p className="sign__link-description">Уже зарегистрированы?<Link to="/signin" className="sign__link">Войти</Link></p>
        </section>
    )
}

export default Register
import { Link } from "react-router-dom";
import './Login.css'
import SignForm from '../SignForm/SignForm';

function Login() {
    return (
        <section className="sign">
            <h2 className="sign__title">Рады видеть!</h2>
            <SignForm btnText="Войти"></SignForm>
            <p className="sign__link-description">Ещё не зарегистрированы?<Link to="/signup" className="sign__link">Регистрация</Link></p>
        </section>
    )
}

export default Login
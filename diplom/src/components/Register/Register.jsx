import './Register.css';
import { Link, useHistory } from "react-router-dom";
import SignForm from '../SignForm/SignForm';
import { registration } from '../../utils/Auth';

function Register() {
    let history = useHistory()

    function formhandleSubmit(name, email, password) {
        registration(name, email, password).then((res)=>{
            history.push("/movies")
            console.log(res)
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <section className="sign">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <SignForm btnText="Зарегистрироваться" formhandleSubmit={formhandleSubmit}></SignForm>
            <p className="sign__link-description">Уже зарегистрированы?<Link to="/signin" className="sign__link">Войти</Link></p>
        </section>
    )
}

export default Register
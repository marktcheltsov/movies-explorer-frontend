import { Link, useHistory } from "react-router-dom";
import './Login.css'
import SignForm from '../SignForm/SignForm';
import { login } from "../../utils/Auth";

function Login({setLoggedIn}) {
    let history = useHistory()

    function formHandleSubmit(data) {
            login(data.email, data.password).then((res)=> {
            localStorage.setItem('token', res.jwt);
            localStorage.getItem('token')
            setLoggedIn(true)
            history.push("/movies")
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    return (
        <section className="sign">
            <h2 className="sign__title">Рады видеть!</h2>
            <SignForm btnText="Войти" formhandleSubmit={formHandleSubmit}></SignForm>
            <p className="sign__link-description">Ещё не зарегистрированы?<Link to="/signup" className="sign__link">Регистрация</Link></p>
        </section>
    )
}

export default Login
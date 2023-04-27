import './Register.css';
import { Link, useHistory } from "react-router-dom";
import SignForm from '../SignForm/SignForm';
import { login, registration } from '../../utils/Auth';

function Register({setLoggedIn}) {
    let history = useHistory()
    
    function formhandleSubmit(data) {
        registration(data.name, data.email, data.password).then((res)=>{
            login(data.email, data.password).then((res)=> {
                localStorage.setItem('token', res.jwt);
                localStorage.getItem('token')
                setLoggedIn(true)
                history.push("/movies")
            }).catch((err)=>{
                console.log(err)
            })
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
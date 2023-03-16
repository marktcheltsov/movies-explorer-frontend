import { useLocation } from "react-router-dom"


function SignForm({btnText}) {
    let location = useLocation()

    function renderSignForm() {
        if (location.pathname === '/signup'){
            return (
                <form className="sign__form">
                    <label className="sign__label">
                        Имя
                        <input type="text" className="sign__input" required minLength="2" maxLength="30"/>
                    </label>
                    <label className="sign__label">
                        E-mail
                        <input type="email" className="sign__input" required />
                    </label>
                    <label className="sign__label" required>
                        Пароль
                        <input type="password" className="sign__input" required/>
                        <p className="sign__error-text">Что-то пошло не так...</p>
                        <button className="sign__submit-btn" type="submit">{btnText}</button>
                    </label>
                </form>

            ) 
            } else {
                return (
                    <form className="sign__form sign__form-signin">
                        <label className="sign__label">
                            E-mail
                            <input type="email" className="sign__input" required/>
                        </label>
                        <label className="sign__label">
                            Пароль
                            <input type="password" className="sign__input" required/>
                        </label>
                        <button className="sign__submit-btn" type="submit">{btnText}</button>
                    </form>
                )
        }
    }
    return (
        <>
            {renderSignForm()}
        </>
    )
}

export default SignForm

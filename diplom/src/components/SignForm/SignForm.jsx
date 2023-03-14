import { useLocation } from "react-router-dom"


function SignForm({btnText}) {
    let location = useLocation()
    function renderSignForm() {
        if (location.pathname === '/signup'){
            return (
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
            ) 
            } else {
                return (
                    <form className="sign__form sign__form_signin">
                    <label for="" className="sign__label">
                        E-mail
                        <input type="text" className="sign__input"/>
                    </label>
                    <label for="" className="sign__label">
                        Пароль
                        <input type="text" className="sign__input"/>
                    </label>
                </form>
                )
        }
    }
    return (
        <>
            {renderSignForm()}
            <button className="sign__submit-btn">{btnText}</button>
        </>
    )
}

export default SignForm

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { validator } from 'validator';
import isEmail from 'validator/lib/isEmail';

function SignForm({btnText, formhandleSubmit}) {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailDirty, setEmailDirty] = useState(false);
    const [ passwordDirty, setPasswordDirty] = useState(false);
    const [ nameDirty, setNameDirty] = useState(false);
    const [ emailError, setEmailError] = useState('email не может быть пыстым');
    const [ nameError, setNameError] = useState('имя не может быть пыстым');
    const [ passwordError, setPasswordError] = useState('пароль не может быть пыстым');
    const [ formValid, setFormFalid ] = useState(false);
    let location = useLocation();

    function handleSumbitForm(e) {
        e.preventDefault()
        if (location.pathname === '/signin') {
            formhandleSubmit(email, password)
        } else {
            formhandleSubmit(name, email, password)
        }
    }

    useEffect(()=> {
        if (location.pathname === '/signup') {
            if (emailError || nameError || passwordError) {
                setFormFalid(false)
            } else {
                setFormFalid(true)
            }
        } else {
            if (emailError || passwordError) {
                setFormFalid(false)
            } else {
                setFormFalid(true)
            }
        }
    }, [emailError, nameError, passwordError])

    function handleChangeInputEmail(e) {
        setEmail(e.target.value)
        console.log(isEmail(e.target.value))
        if (isEmail(e.target.value) === false) {
            setEmailError('email не коректен');
        } else {
            setEmailError('');
        }
    }

    function handleChangeInputPassword(e) {
        setPassword(e.target.value)
        if (e.target.value.length === 0) {
            setPasswordError('пароль не может быть пыстым');
        } else if (e.target.value.length < 3) {
            setPasswordError('пароль должен быть больше 3 символов');
        } else {
            setPasswordError('');
        }
    }

    function handleChangeInputName(e) {
        setName(e.target.value)
        if (e.target.value.length === 0) {
            setNameError('имя не может быть пыстым');
        } else {
            setNameError('');
        }
    }



    const blurHandle = (e)=> {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            default :
                return
        }
    }

    function renderSignForm() {
        if (location.pathname === '/signup'){
            return (
                <form className="sign__form" noValidate> 
                    <label className="sign__label">
                        Имя
                        <input type="text" className="sign__input" name="name" value={name} required minLength="2" maxLength="30" onChange={handleChangeInputName} onBlur={e => blurHandle(e)}/>
                        {(nameDirty && nameError) && <p className="sign__error-text">{nameError}</p>}
                    </label>
                    <label className="sign__label">
                        E-mail
                        <input type="email" className="sign__input" name="email" value={email} required onBlur={e => blurHandle(e)} onChange={handleChangeInputEmail}/>
                        {(emailDirty && emailError) && <p className="sign__error-text">{emailError}</p>}
                    </label>
                    <label className="sign__label" required>
                        Пароль
                        <input type="password" className="sign__input" name="password" value={password} onBlur={e => blurHandle(e)} required onChange={handleChangeInputPassword}/>
                        {(passwordDirty && passwordError) && <p className="sign__error-text">{passwordError}</p>}
                        <button disabled={!formValid} onClick={handleSumbitForm} className={`sign__submit-btn ${formValid ? '' : 'sign__submit-btn_disabled'}`} type="submit">{btnText}</button>
                    </label>
                </form>

            )   
            } else {
                return (
                    <form className="sign__form sign__form-signin" noValidate>
                        <label className="sign__label">
                            E-mail
                            <input type="email" className="sign__input" name="name" value={email} onBlur={e => blurHandle(e)} required onChange={handleChangeInputEmail}/>
                            {(emailDirty && emailError) && <p className="sign__error-text">{emailError}</p>}
                        </label>
                        <label className="sign__label">
                            Пароль
                            <input type="password" className="sign__input" name="password" value={password} onBlur={e => blurHandle(e)} required onChange={handleChangeInputPassword}/>
                            {(passwordDirty && passwordError) && <p className="sign__error-text">{passwordError}</p>}
                        </label>
                        <button disabled={!formValid} onClick={handleSumbitForm} className={`sign__submit-btn ${formValid ? '' : 'sign__submit-btn_disabled'}`} type="submit">{btnText}</button>
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

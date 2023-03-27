import { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import myApi from '../../utils/MainApi';
import CurrentUserContext from '../../utils/UserContext';
import './Profile.css'

function Profile({path, onClickProfileExitLink}){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailDirty, setEmailDirty] = useState(false);
    const [ nameDirty, setNameDirty] = useState(false);
    const [ emailError, setEmailError] = useState('email не может быть пыстым');
    const [ nameError, setNameError] = useState('имя не может быть пыстым');
    const [ formValid, setFormFalid ] = useState(false);
    const [ btnText, setBtnText] = useState('Редактировать')

    let user = useContext(CurrentUserContext);

    function handleSumbitForm(e) {
        e.preventDefault()
        myApi.updateUser(name, email).then((res)=> {
            user = res
            setBtnText('ВЫ УСПЕШНО ОБНОВИЛИ ПРОФИЛЬ');
            setTimeout(() => {
            setBtnText('Редактировать');
            }, 1000);
        }).catch((err)=> {
            console.log(err)
        })
    }

    useEffect(()=> {
        setEmail(user.email);
        setName(user.name);
    }, [user])

    useEffect(()=> {
            if (emailError || nameError) {
                setFormFalid(false)
            } else {
                setFormFalid(true)
            }
    }, [emailError, nameError])

    useEffect(()=> {
        if (user.name === name && user.email === email) {
            setFormFalid(false)
        }
    }, [emailDirty, nameDirty])

    function handleChangeInputEmail(e) {
        setEmail(e.target.value)
        console.log(isEmail(e.target.value))
        setFormFalid(false)
        if (isEmail(e.target.value) === false) {
            setEmailError('email не коректен');
        } else {
            setEmailError('');
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
            case 'name':
                setNameDirty(true)
                break
            default :
                return
        }
    }

    return(
        <Route path={path}>
        <section class="profile">
            <h2 class="profile__title">Привет, {user.name}!</h2>
            <div class="profile__description">

                <div class="profile__description-content-container">
                    <p class="profile__description-about">Имя</p>
                    <div className='profile__description-input-container'>
                    <input  className='profile__description-input' value={name || ''} name='name' onBlur={e => blurHandle(e)} type="text" onChange={handleChangeInputName}/>
                    {(nameDirty && nameError) && <p className="profile__description-error-text">{nameError}</p>}
                    </div>
                </div>
                <div class="profile__description-content-container">
                    <p class="profile__description-about">E-mail</p>
                    <div className='profile__description-input-container'>
                    <input  className='profile__description-input'value={email || ''} name='email' onBlur={e => blurHandle(e)} type="text" onChange={handleChangeInputEmail}/>
                        {(emailDirty && emailError) && <p className="profile__description-error-text">{emailError}</p>}
                    </div>
                </div>
            </div>
            <button disabled={!formValid} onClick={handleSumbitForm} class={`profile__setings-btn profile__edit-btn`} type='submit' >{btnText}</button>
            <button class="profile__setings-btn profile__exit-btn" onClick={onClickProfileExitLink}>Выйти из аккаунта</button>
        </section>
        </Route>
    )
}

export default Profile;
import { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useForm, useWatch } from "react-hook-form";
import CurrentUserContext from '../../utils/UserContext';
import './Profile.css'

function Profile({path, onClickProfileExitLink, handleSubmitForm, profileCorrect}){
    const { register, handleSubmit, control, formState: { errors }, setValue} = useForm({mode: "onChange"});
    const [formDisabled, setFormDisabled] = useState(false);
    let user = useContext(CurrentUserContext);

    const watchedFields = useWatch({ control });
    const hasError = errors.name || errors.email;

    useEffect(()=>{
        setValue('name', user.name)
        setValue('email', user.email)
    }, [user])



    useEffect(() => {
        if (user.name === watchedFields.name && user.email === watchedFields.email) {
            setFormDisabled(true)
        } else {
            setFormDisabled(false)
        }
      }, [watchedFields.name, watchedFields.email]);

    function submitSubmit(data) {
        if (user.name === data.name && user.email === data.email) {
            return 
        } else {
            handleSubmitForm(data)
            setFormDisabled(true)
        }
    }

    return(
        <Route path={path}>
        <section class="profile">
            <h2 class="profile__title">Привет, {user.name}!</h2>
            <form action="" onSubmit={handleSubmit(submitSubmit)}>
            <div class="profile__description">
                <div class="profile__description-content-container">
                    <p class="profile__description-about">Имя</p>
                    <div className='profile__description-input-container'>
                    <input  
                    className='profile__description-input'
                    name='name'
                    type="text"
                    {...register('name', {
                        required: 'поле обзательно',
                        minLength: {
                            value: 2,
                            message: 'поле должно быть болбше 2х символов'
                        },
                    })}
                    />
                    {errors?.name && <p className="profile__description-error-text">{errors?.name?.message || 'error'}</p>}
                    </div>
                </div>
                <div class="profile__description-content-container">
                    <p class="profile__description-about">E-mail</p>
                    <div className='profile__description-input-container'>
                    <input 
                    className='profile__description-input' 
                    name='email' 
                    type="text"
                    {...register('email', {
                        required: 'поле обзательно',
                        minLength: {
                            value: 2,
                            message: 'поле должно быть болбше 2х символов'
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'эмаил долден быть валидным'
                        }
                    })}/>
                        {errors?.email && <p className="profile__description-error-text">{errors?.email?.message || 'error'}</p>}
                    </div>
                </div>
            </div>
            <button class={`profile__setings-btn profile__edit-btn ${formDisabled || hasError ? 'profile__edit-btn_error' : ''}`} disabled={formDisabled || hasError} type='submit'>{profileCorrect ? 'вы успешно обновили профиль' : 'редактировать'}</button>
            </form>
            <button class="profile__setings-btn profile__exit-btn" onClick={onClickProfileExitLink}>Выйти из аккаунта</button>
        </section>
        </Route>
    )
}

export default Profile;
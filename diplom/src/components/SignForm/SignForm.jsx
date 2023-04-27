import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom"

function SignForm({btnText, formhandleSubmit}) {
    const { register, handleSubmit, formState: { errors, isValid  } } = useForm({mode: "onBlur"});
    let location = useLocation();

    function renderSignForm() {
        if (location.pathname === '/signup'){
            return (
                <form className="sign__form" noValidate onSubmit={handleSubmit(formhandleSubmit)}> 
                    <label className="sign__label">
                        Имя
                        <input type="text" 
                            className="sign__input"
                            name="name"
                            {...register('name', {
                                required: 'поле обзательно',
                                minLength: {
                                    value: 2,
                                    message: 'поле должно быть болбше 2х символов'
                                },
                        })}/>
                        {errors?.name && <p className="profile__description-error-text">{errors?.name?.message || 'error'}</p>}
                    </label>
                    <label className="sign__label">
                    E-mail
                        <input 
                        type="email" 
                        className="sign__input" 
                        name="email" 
                        {...register('email', {
                            required: 'поле обзательно',
                            minLength: {
                                value: 2,
                                message: 'поле должно быть болбше 2х символов'
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'эмаил должен быть валидным'
                            }
                        })}/>
                        {errors?.email && <p className="sign__error-text">{errors?.email?.message || 'error'}</p>}
                    </label>
                    <label className="sign__label">
                    Пароль
                        <input type="password"
                         className="sign__input"
                          name="password"
                          {...register('password', {
                            required: 'поле обзательно',
                            minLength: {
                                value: 2,
                                message: 'поле должно быть болбше 2х символов'
                            }
                        })}/>
                        {errors?.password && <p className="sign__error-text">{errors?.password?.message || 'error'}</p>}
                    <button className={`sign__submit-btn ${isValid ? '' : 'sign__submit-btn_disabled'}`} type="submit">{btnText}</button>
                    </label>
                </form>

            )   
            } else {
                return (
                <form className="sign__form sign__form-signin" noValidate onSubmit={handleSubmit(formhandleSubmit)}>
                    <label className="sign__label">
                        E-mail
                        <input 
                        type="email" 
                        className="sign__input" 
                        name="email" 
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
                        {errors?.email && <p className="sign__error-text">{errors?.email?.message || 'error'}</p>}
                    </label>
                    <label className="sign__label">
                    Пароль
                        <input type="password"
                         className="sign__input"
                          name="password"
                          {...register('password', {
                            required: 'поле обзательно',
                            minLength: {
                                value: 2,
                                message: 'поле должно быть болбше 2х символов'
                            }
                        })}/>
                        {errors?.password && <p className="sign__error-text">{errors?.password?.message || 'error'}</p>}
                    </label>
                    <button className={`sign__submit-btn ${isValid ? '' : 'sign__submit-btn_disabled'}`} type="submit">{btnText}</button>
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

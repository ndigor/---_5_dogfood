import { Link, useNavigate } from 'react-router-dom';
import '../forms.css';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userApi } from '../../../utils/apiUser';
import { checkingTheFillingEmail, passwordValidationCheck } from '../../../utils/utils';
import { CardContext } from '../../../context/cardContext';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

const AuthorizationForm = (props) => {
    const { setActiveModal, setHaveTokenAuth, showPassword, setShowPassword } =
        useContext(CardContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate();

    const sendAuthData = async (data) => {
        return await userApi
            .signIn(data)
            .then((res) => {
                localStorage.setItem('token', res.token);
                setActiveModal(false);
                setHaveTokenAuth(true);
                navigate('/');
            })
            .catch((error) => alert('Oooops, ' + error));
    };

    return (
        <div className='form__wrapper'>
            <h2 className='form__title'>Вход</h2>
            <form className='form__container' onSubmit={handleSubmit(sendAuthData)}>
                <div className='input__wrap'>
                    <input
                        type='email'
                        {...register('email', { ...checkingTheFillingEmail })}
                        placeholder='Email'
                        className={errors?.email ? 'form__input warning' : 'form__input'}
                    />
                    {errors?.email && (
                        <span className='warning__text'> {errors?.email.message}</span>
                    )}
                </div>
                <div className='input__wrap'>
                    <div className='input__wrap_pass'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { ...passwordValidationCheck })}
                            placeholder='Пароль'
                            className={errors?.password ? 'form__input warning' : 'form__input'}
                        />
                        <span
                            className='input__eye_show'
                            onClick={() => setShowPassword((state) => !state)}
                        >
                            {showPassword ? <EyeFill /> : <EyeSlashFill />}
                        </span>
                    </div>
                    {errors?.password && (
                        <span className='warning__text'> {errors?.password.message}</span>
                    )}
                </div>
                <Link to='/newPass' className='form__info-right'>
                    <p className='form__info pass__recovery'>Восстановить пароль</p>
                </Link>
                <button type='submit' className='form__btn form__btn-basic'>
                    Войти
                </button>
            </form>
            <Link to='/register' className='form__link'>
                <button className='form__btn'>Зарегистрироваться</button>
            </Link>
        </div>
    );
};

export default AuthorizationForm;
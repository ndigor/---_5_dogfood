import { Link, useNavigate } from 'react-router-dom';
import '../forms.css';
import React, { useContext } from 'react';
import { userApi } from '../../../utils/api';
import { useForm } from 'react-hook-form';
import {
    checkingTheFillingEmail,
    checkingTheFillingGroup,
    passwordValidationCheck,
} from './RegistrationForm.jsx';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { CardContext } from '../../../context/cardContext';

const RegistrationForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate();
    const { showPassword, setShowPassword } = useContext(CardContext);

    const sendRegistrData = async (data) => {
        return await userApi
            .signUp(data)
            .then(() => navigate('/auth'))
            .catch((error) => alert(error));
    };

    return (
        <div className='form__wrapper' onSubmit={handleSubmit(sendRegistrData)}>
            <h2 className='form__title'>Регистрация</h2>
            <form className='form__container'>
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
                <div className='input__wrap'>
                    <input
                        type='number'
                        {...register('group', { ...checkingTheFillingGroup })}
                        placeholder='group'
                        className={errors?.group ? 'form__input warning' : 'form__input'}
                    />
                    {errors?.group && (
                        <span className='warning__text'> {errors?.group.message}</span>
                    )}
                </div>
                <p className='form__info'>
                    Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой
                    конфиденциальности и соглашаетесь на информационную рассылку.
                </p>
                <button type='submit' className='form__btn form__btn-basic'>
                    Зарегистрироваться
                </button>
            </form>
            <Link to='/auth' className='form__link'>
                <button className='form__btn'>Назад к авторизации</button>
            </Link>
        </div>
    );
};

export default RegistrationForm;
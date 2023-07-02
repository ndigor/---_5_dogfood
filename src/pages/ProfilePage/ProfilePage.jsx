/* eslint-disable no-unused-vars */

import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMyUser, getUser, updateUser } from '../../storage/slices/userSlice'
import './style.scss'
import { BaseButton } from '../../components/Button/Button'
import { useForm } from 'react-hook-form'

export const ProfilePage = ({ setModalActive }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: user, loading } = useSelector(s => s.user);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onBlur" });


    useEffect(() => {
        dispatch(getUser('dataFromUp here'))
    }, [dispatch]);

    const sendData = data => {
        dispatch(updateUser(data));
        reset()
    }

    const logout = () => {
        localStorage.removeItem('token');
        setModalActive(true)
        navigate('/login');
    }

    return (
        <>
            {loading || !user._id ? 'loading' :
                <div className='profile'>
                    <div>
                        <h1>Профиль пользователя</h1>
                    </div>
                    <div><h2>Игорь Недякин</h2></div>
                    
                    <div>
                        <h3><i><strong>igorfok08@yandex.ru</strong></i></h3>
                        <p>Системный администратор, и может быть, но врятли Frontend-разработчик</p>
                    </div>
                    <div>
                        <form className=" form-example" onSubmit={handleSubmit(sendData)}>
                            <img src={user?.avatar} className='profile__avatar' alt='this is avatar' />
                        
                        </form>
                       
                        

                    </div>
                </div>
            }
            {/* {errors ? } */}

        </>
    )
}
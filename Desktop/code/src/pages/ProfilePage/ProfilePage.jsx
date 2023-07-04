/* eslint-disable no-unused-vars */

import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMyUser, getUser, updateUser } from '../../storage/slices/userSlice'
import './style.scss'
import { BaseButton } from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import {Edit} from "../../assets/icons/Edit";
import {EditModal} from "../../components/EditModal/EditModal";
import {api} from "../../utils/api";
import {EditAvatar} from "../../components/EditAvatar/EditAvatar";

export const ProfilePage = ({ setModalActive, setIsRefetch, isRefetch }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [isEditAvatar, setIsEditAvatar] = useState(false)

    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [about, setAbout] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: user, loading } = useSelector(s => s.user);
    const token = localStorage.getItem('token')

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onBlur" });


    useEffect(() => {
        dispatch(getUser('dataFromUp here'))
    }, [dispatch]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    const getUserData = useCallback(async () => {

        if(token && token.length) {
            try {
                const result = await api.getUserInfo()
                setUserName(result.name)
                setAvatar(result.avatar)
                setAvatar(result.avatar)
                setAbout(result.about)
                setEmail(result.email)
            } catch (e) {
                console.log(e)
            }
        }
    }, [])

    useEffect( () => {
        getUserData()
    }, [getUserData])

    useEffect(() => {
        if(isRefetch) {
            getUserData()
        }
    }, [isRefetch])

    return (
        <>
            {loading || !user._id ? 'loading' :
                <div className='profile'>
                    <div style={{display: 'flex'}}>
                        <h1>Профиль пользователя</h1>
                        <button
                            onClick={logout}
                            style={{
                                marginLeft: 'auto',
                                background: 'gray',
                                color: '#fff',
                                borderRadius: '7px',
                                padding: '5px',
                                height: '40px'
                        }}
                        >
                            Выйти
                        </button>
                    </div>
                    <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                        <h2>{userName}</h2>
                        <button
                            onClick={() => setIsEdit(true)}
                            style={{cursor: 'pointer'}}
                        >
                            <Edit />
                        </button>

                    </div>
                    
                    <div>
                        <h3><i><strong>{email}</strong></i></h3>
                        <p>{about}</p>
                    </div>
                    <img src={avatar} className='profile__avatar' alt='this is avatar' onClick={() => setIsEditAvatar(true)}/>
                </div>
            }
            {/* {errors ? } */}
            <EditModal isActive={isEdit} setIsActive={setIsEdit} name={userName} about={about} setIsRefetch={setIsRefetch}/>
            <EditAvatar isActive={isEditAvatar} setIsActive={setIsEditAvatar} setIsRefetch={setIsRefetch}/>

        </>
    )
}
/* eslint-disable no-unused-vars */

import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMyUser, updateUser } from '../../storage/slices/userSlice'
import './style.scss'
import { BaseButton } from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import {GoBack} from '../../components/GoBack/GoBack'


export const ProfilePage = () => {
    
    const { userData, isLoading } = useSelector((s) => s.user);
    const [nameU, setNameU]=useState(userData?.name)
const  [avatarU, setAvatarU] = useState(userData?.avatar)
const [aboutU, setAboutU] = useState(userData?.about)
    //const dispatch = useDispatch();
    const [formActive, setFormActive] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState(userData?.avatar);
    /*const { register, handleSubmit } = useForm({
        defaultValues: { name: userData.value, about: userData.about, avatar: userData.avatar },
    });

    useEffect(() => {
        //dispatch(getMyUser);
    }, [dispatch]);

    const sendData = (data) => {
        //dispatch(updateUser(data));
    };
    */
const go=(e)=>{
    e.preventDefault();
    const body={
        'name':nameU,
        'about':aboutU,
        'avatar':avatarU,
    }
    console.log(body);
}
    return (
        <div className='profile__container'>
            <h2 className='profile__title'>Профиль</h2>
            {isLoading ? (
                <div className='profile__info preload'></div>
            ) : (
                <div className='profile__info'>
                    <div className='avatar__wrap'>
                        <img style={{width:"200px", height:"200px"}} src={avatarU}/>
                    </div>
                    <div className='profile__info_detail'>
                        <p className='profile__name'>{userData?.name}</p>
                        <span className='profile__contact'>{userData?.about}</span>
                        <span className='profile__contact'>{userData?.email}</span>
                    </div>
                </div>
            )}
            <button onClick={() => setFormActive(!formActive)} className='profile_btn'>
                Изменить
            </button>
            {formActive && (
                <div className='profile__form_wrap'>
                    <div className='inputPost__preview_wrap'>
                        <img
                            className='inputPost__preview'
                            src={avatarU}
                            onError={(e) => (e.currentTarget.src = '')}
                            alt='avatar'
                        />
                    </div>
                    <form className='profile__form' onSubmit={go}>
                        <h4>Мои данные</h4>
                        <input
                            type='text'
                            //{...register('name')}
                            value={nameU}
                            onChange={(e) => setNameU(e.currentTarget.value)}
                            placeholder='Имя'
                            className='profile__form_input'
                        />
                        <input
                            type='about'
                            //{...register('about')}
                            value={aboutU}
                            onChange={(e) => setAboutU(e.currentTarget.value)}
                            className='profile__form_input'
                            placeholder='Обо мне'
                        />
                        <input
                            type='avatar'
                            //{...register('avatar')}
                            className='profile__form_input'
                            placeholder='Ваш новый аватар'
                            value={avatarU}
                            onChange={(e) => setAvatarU(e.currentTarget.value)}
                            onError={() => setPreviewAvatar('')}
                        />
                        <button type='submit' className='profile_btn'>
                            Сохранить
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};
export default ProfilePage;
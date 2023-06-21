/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Product } from "../../components/Product/Product"
import { api } from '../../utils/api'
import { useParams } from 'react-router-dom'
import { CardsContext } from '../../context/cardContext'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../storage/slices/userSlice'
export const ProfilePage = () => {
    const dispatch = useDispatch();
    const {data}  = useSelector(s => s.user)
    const[name,setName] =useState(data.name)
    const[group,setGroup] =useState(data.group)
    const[speciality,setSpeciality] =useState(data.speciality)
    useEffect(() => {
        dispatch(getUser('hello from profile'))
    }, [dispatch])
    return (
        <>
            Profile
        <div>
            {data.name}
            <img src={data?.avatar}/> 
        </div>
        <form action="">
            Введите имя
            <input id='name' type='text' placeholder='Имя' value={name} onChange={(igor)=>{setName(igor.currentTarget.value)}}/>
            &nbsp;&nbsp;
            Введите Вашу группу
            <input id='group' type='text' placeholder='лучшая' value={group} onChange={(лучшая)=>{setGroup(лучшая.currentTarget.value)}}/>
            &nbsp;&nbsp;
            <input id='group' type='text' placeholder='Frontend' value={speciality} onChange={(Frontend)=>{setSpeciality(Frontend.currentTarget.value)}}/>
            
            &nbsp;&nbsp;
            Жмякните кнопочку
            <button type='submit' name='Отправить'>Отправить</button>
        </form>
        {/* {errors ? } */}
        </>
    )
}
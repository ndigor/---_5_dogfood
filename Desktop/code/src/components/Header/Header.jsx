
import React, {useCallback, useContext, useEffect, useState} from 'react'
import './index.css';

import { ReactComponent as LogoSvg } from '../Logo/logo.svg';
import { Search } from '../Search/Search';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as Basket } from './img/basket.svg';
import { ReactComponent as Profile } from './img/profile.svg';
import { ReactComponent as Like } from '../Card/img/Like.svg';
import { CardsContext } from '../../context/cardContext';
import {api} from "../../utils/api";



export const Header = (props) => {
    const [useName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('')

    const setSearchQuery = (path) => {
        props.setSearch(path);
    }

    const location = useLocation();

    const { favorites, setModalActive } = useContext(CardsContext);
    const token = localStorage.getItem('token')

    const getUserData = useCallback(async () => {

        if(token && token.length) {
            try {
                const result = await api.getUserInfo()
                console.log(result)
                setUserName(result.name)
                setAvatar(result.avatar)

            } catch (e) {
                console.log(e)
            }
        }
    }, [])

    useEffect( () => {
        getUserData()
    }, [getUserData])

    useEffect(() => {
        getUserData()
    }, [props.isRefetch])

    return <div className="header">
        <div className='container'>
            <div className='header__wrapper'>
                <Link to={'/'}>
                    <LogoSvg className='logo' />
                </Link>
                {location.pathname === '/' && <Search setSearch={setSearchQuery} />}
                <div className='header__icons'>
                    <Link className='header__fav' to={'/favorites'}>
                        <Like className='header__like' />
                        {!!favorites.length && <span className='header__bubble'>{favorites.length}</span>}
                    </Link>
                    <Basket className='header__icon' />
                    <Link to={'/login'} onClick={()=>setModalActive(true)}>
                    <Profile  className='header__icon' />
                    </Link>
                    {token
                        ?   <Link to={'/profile'} style={{display: 'flex', alignItems: 'center'}}>
                                <h3>{useName}</h3>
                            <img src={avatar} alt={'avatar'} className={'header__avatar'}/>
                            </Link>
                        : ''
                    }

                </div>
            </div>
        </div>
    </div>
}

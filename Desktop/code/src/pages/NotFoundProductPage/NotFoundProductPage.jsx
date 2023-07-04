import React from 'react';
import svg from './../../components/NotFound/NotFound.svg';
import './notFoundProductPage.css';
import { Link, NavLink } from 'react-router-dom';

const NotFoundProductPage = ({ search, setSearch }) => {
    // console.log({ search });
    // console.log({ setSearch });
    return (
        <>
            <div className="container">
                <div className="notFoundProductPage__wrapper">
                    <img
                        className="notFoundProductPage__img"
                        src={svg}
                        alt="sad smile"
                    />
                    <h2 className="notFoundProductPage__title">
                        Простите, товары по вашему запросу не найдены.
                    </h2>
                    <Link to={'/'}>
                        {/* Вот здесь вопрос: не перекидывает на главную потомцу что не принят и не обнулен search? */}
                        {/* Как обнулить значение в инпуте ??? */}
                        <button
                            className="notFoundProductPage__btn"
                            onClick={() => {
                                setSearch('') && <NavLink to="/"></NavLink>;
                            }}
                        >
                            На главную
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundProductPage;

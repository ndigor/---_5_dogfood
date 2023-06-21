import React from 'react';
import svg from './NotFound.svg';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <>
            <div className="container">
                <div className="NotFound__wrapper">
                    <img
                        className="NotFound__img"
                        src={svg}
                        alt="sad smile"
                    />
                    <h2 className="NotFound__title">
                        Извините, данная страничка сломалась либо больше не существует.
                    </h2>
                    <button className="NotFound__btn">На главную</button>
                </div>
            </div>
        </>
    );
};

export default NotFound;

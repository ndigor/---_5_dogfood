import React from 'react';
import './goBack.css';
import { useNavigate } from 'react-router-dom';

const GoBack = (props) => {
    const nav = useNavigate();

    const goBack = () => {
        nav('/');
    };

    return (
        <>
            <span className="product__back" onClick={() => goBack()}>
                {'>'} К списку товаров
            </span>
        </>
    );
};

export default GoBack;

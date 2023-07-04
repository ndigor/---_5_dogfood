import React from 'react';
import './favoritePage.css';
import GoBack from '../../components/GoBack/GoBack';

const FavoritePage = (props) => {
    return (
        <div className="favorite__wrapper">
            <GoBack />
            <h2 className="favorite__title">Избранное</h2>
            <div></div>
            {/* CardList */}
        </div>
    );
};

export default FavoritePage;

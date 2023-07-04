import React from 'react';
import { CardList } from '../components/CardList/CardList';

const CatalogProducts = ({ cards, user, changeLikeCard }) => {
    return (
        <>
            <CardList
                cards={cards}
                userId={user._id}
                changeLikeCard={changeLikeCard}
            />
        </>
    );
};

export default CatalogProducts;

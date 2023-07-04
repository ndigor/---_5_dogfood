import React from 'react';
import './search.css';

const Search = ({ setSearch }) => {
    return (
        <div className="search">
            <input
                className="search__input"
                placeholder="Поиск..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fas fa-search"></i>
        </div>
    );
};

export default Search;

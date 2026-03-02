import React from 'react';
import './Searchbar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Busca un chat o inicia uno nuevo"
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default SearchBar;
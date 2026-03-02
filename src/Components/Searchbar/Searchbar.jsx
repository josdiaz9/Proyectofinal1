import React from 'react';
import './Searchbar.css';

const Searchbar = ({ onSearch }) => {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Busca un chat o inicia uno nuevo"
                    className="search-input"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Searchbar;
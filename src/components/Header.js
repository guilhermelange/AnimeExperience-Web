/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import letter from '../assets/letter-logo.png'
import search from '../assets/search.svg'
import fav from '../assets/fav.svg'

import '../styles/components/Header.css';

const Header = ({ black }) => {

    const avatar = localStorage.getItem('AVATAR_USER')

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#">
                    <img src={letter} alt="AnEx" />
                </a>
            </div>
            <div className="header--info">
                <div className="buttonsHeader">
                    <button><img src={fav} alt="AnEx" className="favHeader" />Favoritos</button>
                    <button><img src={search} alt="AnEx" />Pesquisar</button>
                </div>
                <div className="header--user">
                    <a href="#">
                        <img src={avatar} alt="Usuário" style={{ borderRadius: '10px' }} />
                    </a>
                </div>
            </div>

        </header>

    );
}

export default Header;
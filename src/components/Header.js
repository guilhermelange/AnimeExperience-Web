/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'

import '../styles/components/Header.css';

const Header = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#">
                    <img src={logo} alt="AnEx" />
                </a>
            </div>

            <div className="header--user">
                <a href="#">
                    <img src={avatar} alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;
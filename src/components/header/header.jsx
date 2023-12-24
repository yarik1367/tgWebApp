import React from 'react';
import "../button/button.css";
import {useTelegram} from "../../hooks/useTelegram";
import './header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className='header'>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
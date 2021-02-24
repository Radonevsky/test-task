import React from 'react';
import s from './Header.module.css'
import search_icon from '../assets/search_icon.png'

const Header = () => {
    return(
        <div className={s.header}>
            <input type="text"/>
            <img src={search_icon} alt="search"/>
        </div>
    )
}



export default Header;

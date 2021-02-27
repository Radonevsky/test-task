import React from 'react';
import s from './Navbar.module.css'
import logo from '../assets/logo.png'
import book from '../assets/book.png'
import file from '../assets/file.png'
import people from '../assets/people.png'
import city from '../assets/city.png'
import analytics from '../assets/analytics.png'
import settings from '../assets/settings.png'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.logo}>
                <img src={logo} alt='logo'/>
            </div>


            <div className={s.navItem}>
                <NavLink to="/knowledge" activeClassName={s.activeLink}>
                    <div>
                        <img src={book} alt='book'/>
                        <div>База знаний</div>
                    </div>
                </NavLink>
                <NavLink to="/applications" activeClassName={s.activeLink}>
                    <div>
                        <img src={file} alt='file'/>
                        <div>Заявки</div>
                    </div>
                </NavLink>
                <NavLink to="/staff" activeClassName={s.activeLink}>
                    <div>
                        <img src={people} alt='people'/>
                        <div>Сотрудники</div>
                    </div>
                </NavLink>
                <NavLink to="/clients" activeClassName={s.activeLink}>
                    <div>
                        <img src={city} alt='city'/>
                        <div>Клиенты</div>
                    </div>
                </NavLink>
                <NavLink to="/assets" activeClassName={s.activeLink}>
                    <div>
                        <img src={analytics} alt='analytics'/>
                        <div>Активы</div>
                    </div>
                </NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink}>
                    <div>
                        <img src={settings} alt='settings'/>
                        <div>Настройки</div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;

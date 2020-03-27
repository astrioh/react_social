import React from 'react'
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__menu}>
                <li className={s.navbar__listItem}><NavLink activeClassName={s.active} to='/profile' className={s.navbar__link}>Profile</NavLink></li>
                <li className={s.navbar__listItem}><NavLink activeClassName={s.active} to='/messages' className={s.navbar__link}>Messages</NavLink></li>
                <li className={s.navbar__listItem}><NavLink activeClassName={s.active} to='/news' className={s.navbar__link}>News</NavLink></li>
                <li className={s.navbar__listItem}><NavLink activeClassName={s.active} to='/music' className={s.navbar__link}>Music</NavLink></li>
                <li className={s.navbar__listItem}><NavLink activeClassName={s.active} to='/settings' className={s.navbar__link}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
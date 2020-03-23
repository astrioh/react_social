import React from 'react'
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__menu}>
                <li className={s.navbar__listItem}><a className={s.navbar__link} href="#mockup_change-me-later">Profile</a></li>
                <li className={s.navbar__listItem}><a className={s.navbar__link} href="#mockup_change-me-later">Messages</a></li>
                <li className={s.navbar__listItem}><a className={s.navbar__link} href="#mockup_change-me-later">News</a></li>
                <li className={s.navbar__listItem}><a className={s.navbar__link} href="#mockup_change-me-later">Music</a></li>
                <li className={s.navbar__listItem}><a className={s.navbar__link} href="#mockup_change-me-later">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
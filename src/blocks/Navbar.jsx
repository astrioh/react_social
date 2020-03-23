import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__menu'>
                <li className='navbar__list-item'><a className='navbar__link' href="#mockup_change-me-later">Profile</a></li>
                <li className='navbar__list-item'><a className='navbar__link' href="#mockup_change-me-later">Messages</a></li>
                <li className='navbar__list-item'><a className='navbar__link' href="#mockup_change-me-later">News</a></li>
                <li className='navbar__list-item'><a className='navbar__link' href="#mockup_change-me-later">Music</a></li>
                <li className='navbar__list-item'><a className='navbar__link' href="#mockup_change-me-later">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
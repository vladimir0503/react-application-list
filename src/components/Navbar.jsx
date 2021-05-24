import React from 'react'
import { book, sheet, people, city, analytics, settings, logo } from '../assets/images'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navItems = [
        {
            img: book,
            name: 'База знаний',
            to: '/information-store'
        },
        {
            img: sheet,
            name: 'Заявки',
            to: '/applications'
        },
        {
            img: people,
            name: 'Сотрудники',
            to: '/staff'
        },
        {
            img: city,
            name: 'Клиенты',
            to: '/clients'
        },
        {
            img: analytics,
            name: 'Активы',
            to: '/assets',
            styleImg: 'assets'
        },
        {
            img: settings,
            name: 'Настройки',
            to: '/settings'
        },
    ]

    return (
        <div className='navbarWrapper'>
            <div>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <nav>
                <ul>
                    {navItems.map((item, i) =>
                        <NavLink activeClassName='selected' to={item.to} key={i}>
                            <li>
                                <img className={item.styleImg} src={item.img} alt='logo'></img>
                                <p>{item.name}</p>
                            </li>
                        </NavLink>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
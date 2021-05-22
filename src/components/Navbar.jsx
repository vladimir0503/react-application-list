import React from 'react'
import { book, sheet, people, city, analytics, settings, logo } from '../assets/images'

const Navbar = () => {

    const navItems = [
        { img: book, name: 'База знаний' },
        { img: sheet, name: 'Заявки' },
        { img: people, name: 'Сотрудники' },
        { img: city, name: 'Клиенты' },
        { img: analytics, name: 'Активы' },
        { img: settings, name: 'Настройки' },
    ]

    return (
        <div className='navbarWrapper'>
            <div>
                <img className='logo' src={logo}></img>
            </div>
            <nav>
                <ul>
                    {navItems.map((item, i) =>
                        <li key={i}>
                            <img src={item.img} alt='logo'></img>
                            <p>{item.name}</p>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react'
import { search } from '../assets/images'

const Header = () => {
    return (
        <div className='headerWrapper'>
            <div className='inputBlock'>
                <input></input>
                <img src={search}></img>
            </div>
        </div>
    );
};

export default Header;
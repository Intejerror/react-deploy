import React from 'react'
import logoImg from '../assets/image/logo.png'
import Menu from './Menu'

function Header() {

    return (
        <header className='header'>
            <div className="wrapper">
                <div className="logo">
                    <img src={logoImg} alt="logo.png" />
                    ДорСтройМонтаж
                </div>

                <Menu />
            </div>
        </header>
    )
}

export default Header
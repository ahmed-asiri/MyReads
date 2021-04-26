import React from 'react'
import logo from '../image/logo.png'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="header__title">MyReads</div>
        </div>
    )
}

export default Header

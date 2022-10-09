import React from 'react'
import "./Header.scss"

export default function Header() {
    return (
        <header className="Header" id="header">
            <div className="header_logo">
                <span>bicas ecosystem</span>
            </div>
            <div className="header_menu">
                <button className="header_menu_btn">Menu</button>

                <div className="header_burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    )
}
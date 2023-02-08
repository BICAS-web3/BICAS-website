import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Header.scss"

import mobLogo from "../../assets/img/mob_logo.svg"

export default function Header() {

    let [showNav, setshowNav] = useState(false)

    return (
        <header className="Header" id="header">
            <div className="header_logo">
                <span>bicas ecosystem</span>
                <div className="mobLogo">
                    <img src={mobLogo} alt="" />
                </div>
            </div>
            <div className="header_menu">
                {/* <button className="header_menu_btn">Menu</button> */}

                <nav className={"nav " + ((showNav) ? "openNav" : '')}>
                    <ul>
                        <li>
                            <AnchorLink href='#topBanner' onClick={() => setshowNav(false)}>home</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#advantages' onClick={() => setshowNav(false)}>advantages</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#team' onClick={() => setshowNav(false)}>team</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#platforms' onClick={() => setshowNav(false)}>platforms</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href='#Roadmap' onClick={() => setshowNav(false)}>Roadmap</AnchorLink>
                        </li>
                    </ul>
                </nav>

                <div className={"header_burger " + ((showNav) ? "burger_close" : '')}
                    onClick={() => setshowNav(!showNav)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    )
}
import React, { useState } from 'react'
import "./footer.scss"

import Logo from "../../assets/img/Logo.svg"
import twitter from "../../assets/img/twitter.svg"
import inst from "../../assets/img/inst.svg"
import social3 from "../../assets/img/social3.svg"
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {

    let [formData, setformData] = useState({})

    let handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            userEmail: e.target[0].value
        }
        setformData(obj)
    }

    return (
        <div className="Footer" id="footer">
            <div className="column colLogo_mb">
                <AnchorLink href='#header' className="logo">
                    <img src={Logo} alt="" />
                </AnchorLink>
                <span className="bicasEcosystem">BICAS ECOSYSTEM</span>
                <span className="copyright">© 2022 All Rights Reserved</span>
            </div>
            <div className="column colExplore_mb">
                <span className="FNavTitle">Explore:</span>
                <a href="#"><span className="FNavLink">Main Website</span></a>
                <a href="#"><span className="FNavLink">Blog</span></a>
                <a href="#"><span className="FNavLink">Join the Ecosystem</span></a>

                <a className="privacyPolicy FNavLink" href="#"><span>Privacy Policy</span></a>
            </div>
            <div className="column colDevelopers_mb">
                <span className="FNavTitle">Developers:</span>
                <a href="#"><span className="FNavLink">White Paper</span></a>
                <a href="#"><span className="FNavLink">Bug Bounty</span></a>
                <a href="#"><span className="FNavLink">Bicas License</span></a>

                <a className="privacyPolicy FNavLink" href="#"><span>Privacy Policy</span></a>
            </div>
            <div className="column colContacts_mb">
                <span className="FNavTitle">Contact us:</span>
                <a href="#"><span className="FNavLink">support@****.io</span></a>
                <a href="#"><span className="FNavLink">support@****.io</span></a>
                

                <span className="FNavTitle FNavSocialTitle">Follow us:</span>
                <div className="socials">
                    <a href="#">
                        <div className="footer_social">
                            <img src={twitter} alt="" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="footer_social">
                            <img src={inst} alt="" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="footer_social">
                            <img src={social3} alt="" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="column colsubscribeForm colForm_mb">
                <span className="FNavTitle">Newsletter</span>
                <p className="FNavLink FNav_Newsletter_text">Subscribe to our newsletter for weekly updates on all things Bicas Ecosystem</p>

                <form className="subscribeForm" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder="Subscribe by email to get notification" />
                    <button>
                        <svg viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="24.8381" y2="-0.5" transform="matrix(0.792403 0.609998 -0.542332 0.840165 1 1)" stroke="white" />
                            <path d="M1 31.1533L21 15.6946" stroke="white" />
                        </svg>
                    </button>
                </form>

                <span className="designBy">DESIGN BY CRYPTORSY</span>
            </div>
        </div>
    )
}
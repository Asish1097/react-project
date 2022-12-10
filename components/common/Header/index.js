import S from "./Header.module.scss";
import React, { useState } from "react";
import WhiteLogo from 'src/images/logoWhite.svg'
import GreenLogo from 'src/images/logoGreen.svg'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const HEADER_LINKS = [{
    title: 'Home',
    link: '/home',
    exact: true
}, {
    title: 'How it works',
    link: '/how-it-works'
}, {
    title: 'About',
    link: '/about-us'
}, {
    title: 'Signup',
    link: '/signup'
}, {
    title: 'Store',
    link: '/our-gear'
}, {
    title: 'Contact',
    link: '/contact-us'
}
]
const Header = ({ isLight }) => {
    const [toggle, setToggle] = useState(false)
    const location = useLocation();
    return (<header className={S.header}>
        <div className="container">
            <nav className={`navbar navbar-expand-lg px-0`}>
                <a className={`navbar-brand ${S.main_logo}`} href="/">
                    <img
                        src={isLight ? GreenLogo : WhiteLogo}
                        alt="Postablur"
                    />
                </a>
                <button className={S.navbar_toggler} onClick={() => setToggle(!toggle)}>
                    <span className={S.navbar_toggler_icon}><i className="fa fa-align-justify" aria-hidden="true"></i></span>
                </button>

                <div className={`navbar-collapse justify-content-end ${S.main_menu}`} id={S.main_menu}>
                    <ul className="navbar-nav ml-auto">
                        {HEADER_LINKS.map((option, idx) => (<li className={`${isLight ? S.light_option : S.dark_option} ${location.pathname === option.link ? S.active : ''}`} key={idx}>
                            <NavLink
                                exact={option.exact}
                                to={option.link}
                                activeClassName={S.active}
                            >
                                {option.title}
                            </NavLink></li>))}
                    </ul>
                </div>

                {toggle && (
                    <div className={`navbar-collapse justify-content-end ${S.main_menu}`}>
                        <ul className="navbar-nav ml-auto">
                            {HEADER_LINKS.map((option, idx) => (<li key={idx} className={`${S.dark_option} ${location.pathname === option.link ? S.active : ''}`}>
                                <NavLink
                                    exact={option.exact}
                                    to={option.link}
                                    activeClassName={S.active}
                                >
                                    {option.title}
                                </NavLink></li>))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    </header>)
}

export default Header;
import React from 'react';
import { Logo } from '../../assets/images/index';

const Header = () => {
    return(
        <div className="site-header header-wrapper">
            <header className="header-module-header">
                <a className="header-logo-homelink" href="/">
                        <img src={Logo} alt="giga-logo"/>
                    <div className="giga-text">
                        ARK API
                    </div>    
                </a>
                <nav className="main-nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/docs">Documentation</a>
            </nav>
            </header>
        </div>
    )
}

export default Header;
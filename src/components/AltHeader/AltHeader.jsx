import React from 'react';
import { Logo } from '../../assets/images/index';

import "./AltHeader.css"

const AltHeader = () => {
    return(
        <div className="alt-site-header">
            <header className="alt-header-module-header">
                <a className="alt-header-logo-homelink" href="/">
                        <img src={Logo} alt="giga-logo"/>
                    <div className="alt-giga-text">
                        ARK API
                    </div>    
                </a>
                <nav className="alt-main-nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/docs">Documentation</a>
            </nav>
            </header>
        </div>
    )
}

export default AltHeader;
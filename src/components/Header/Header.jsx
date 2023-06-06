import React, { useState, useEffect } from 'react';
import { Logo } from '../../assets/images/index';

import "./Header.css"

const Header = (props) => {

    const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = props.threshold; // Adjust this value to set the threshold for changing opacity
  
        if (scrollPosition > threshold) {
          setIsNavbarOpaque(true);
        } else {
          setIsNavbarOpaque(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [props.threshold]);

    return(
        <div className={`site-header ${isNavbarOpaque ? 'opaque' : ''}`}>
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
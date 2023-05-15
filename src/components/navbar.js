import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
           <nav className = "navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Riley Lawson
                        <i className="fab fa-type3"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        {/*
                        <div className="mobile-menu-bottom">
                            <div className="social-icons">
                                <i className="fab fa-github"/>
                                <i className="fab fa-github"/>
                                <i className="fab fa-github"/>
                                <i className="fab fa-github"/>
                                <i className="fab fa-github"/>
                            </div>
                        </div>
                        */}
                        
                    </ul>

                    {button && 
                        <Button buttonStyle='btn--outline'>
                            <i className="fab fa-github"/>
                        </Button>
                    }
                </div>
                
            </nav>         
        </>
    );
}

export default Navbar;
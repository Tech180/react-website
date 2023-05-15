import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
//import { Button } from './button'
import { Link } from 'react-scroll';

import './navbar2.css';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    /*
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
    */


    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Riley Lawson</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} >
                    <li>Home</li>
                </Link>
                <Link to='about-me' smooth={true} duration={500} >
                    <li>About Me</li>
                </Link>
            </ul>
            {/*
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            */}   

            <div className="hamburger" onClick={handleNav}>
                <i className={nav ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
 
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500} >
                        <li>Home</li>
                    </Link>
                    <Link to='about-me' smooth={true} duration={500} >
                        <li>About Me</li>
                    </Link>
                </ul>
                <div className="mobile-menu-bottom">
                    {/*
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    */}
                    <div className="social-icons">
                        <FaLinkedin className='icon' />
                        <FaGithub className='icon' />
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
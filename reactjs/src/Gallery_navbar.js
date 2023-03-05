import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Gallery_bodypage from './Gallery_bodypage';

import './Gallery_navbar.css';
function Gallery_navbar() {
  const [click,setClick]=useState(false);
  const [button,setButton]=useState(true);

  const handleClick= () => setClick(!click);
  const closeMobileMenu= () => setClick(false);

  const showButton= () => {
    if(window.innerWidth<=960){
      setButton(false);
    }else {
      setButton(true);
    }
  };
  window.addEventListener('resize',showButton);
  

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
                <Link to='/gallerypage' className='navbar-logo'>ART GALLERY</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click?'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='usermsg'>Welcome User!</li>
                    <li className='nav-item'>
                        <a href='#' className='nav-links-mobile' onClick={closeMobileMenu}>Log In</a>
                    </li>
                </ul>
                <Link to="/"><button className='btn-logout'>Log Out</button></Link>
                
        </div>
    </nav>
    <Gallery_bodypage/>
    </>
  );
}

export default Gallery_navbar

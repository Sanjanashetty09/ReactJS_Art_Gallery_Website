import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Home.css';
import Mainsection_js from './Mainsection_js';
function Home() {
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
                <Link to='/' className='navbar-logo'>ART GALLERY</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click?'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='/about' className='nav-links' onClick={closeMobileMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>Log In</Link>
                    </li>
                </ul>
                <Link to='/login'> <button className='btn-login'>Log In</button></Link>  
        </div>
    </nav>
    <Mainsection_js/>
    </>
  );
}

export default Home
import React, {useState}  from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';

function Contact() {
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
    <div className="box-wrapper" id='contact-page'>
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul className="info-details">
                    <li>
                        <span><b>Phone:</b></span> <a href="tel:+91-1234567890">+ 1235 2355 98</a>
                    </li>
                    <li>
                        <span><b>Email:</b></span> <a href="mailto:artgallery@gmail.com">artgallery@gmail.com</a>
                    </li>
                    <li> 
                        <span><b>Location:</b></span> <a href="#">Akshya Nagar 1st Block 1st Cross, Banglore</a>
                    </li>
                </ul>
            </div>
            <div className="form-wrap">
                <form action="#" method="">
                    <h2 className="form-title">Send us a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="phone" placeholder="Phone no."/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
                </form>
            </div>
        </div>
      
    </>
  )
}

export default Contact

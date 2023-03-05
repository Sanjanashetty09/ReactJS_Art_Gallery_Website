import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const About = () => {
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
                        <a href='#footer-id' className='nav-links' onClick={closeMobileMenu}>About</a>
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
<div style={{backgroundColor:"black",width:"400px",height:"450px",marginLeft:"300px",marginTop:"100px"}}>
    <h1 style={{textAlign:"center",paddingTop:"180px",fontSize:"50px",color:"#fff"}}>ABOUT</h1></div>
<div style={{width:"200px",height:"450px",width:"400px",border:"2px solid black",marginLeft:"700px",marginTop:"-450px"}}>

<div className='form-container-contents'>
<h3 style={{textAlign:"justify" ,padding:"20px"}}>This Art Gallery is primarily meant for the virtual artists to promote their their work, and expose them to the public, collectors, media, and cultural institutions.The gallery works tirelessly and strategically to advance the artists careers and establish them in the professional art world both locally and globally.<br/>With commercial art galleries, the gallery collaborates with several artists, agreeing to represent and support them. This means the gallery commits to showcasing, promoting, selling, and distributing the artworks of the artist in question. By doing so, the artist can make a living and build his career, collectors base, and artist resume.</h3>

</div>
</div>


    </>
  )
}

export default About

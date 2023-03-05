import React from 'react'
import './Mainsection_js.css';
import image_bg from './images/backgroundimage.jpg'
import Gridimage from './Gridimage';
import { Link } from 'react-router-dom';

function Mainsection_js() {
  return (
    <>
    <div className='main-container' id='main-section-id'>
        <img src={image_bg} alt="bg_img"/>
        <div className='text_content'>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ART IS A LIE THAT</h1>
        <h1>MAKES US REALIZE THE TRUTH</h1></div>
        <h2>From the Artist's Studio to Your Doorstep</h2>
        <div className='main-btn-signup'>
          <p>New User?</p>
           <Link to='/signup' className='btn-mobile_signup'> <button className="btn_signup" >
                Create an Account
            </button></Link> 
        </div>
    </div>
    <div className='gallery-container'>
      <br/><br/>
      <h2>Check out our arts</h2>
      <br/><br/>
    </div>
    <br/>
    <Gridimage/>
    </>
  )
}

export default Mainsection_js

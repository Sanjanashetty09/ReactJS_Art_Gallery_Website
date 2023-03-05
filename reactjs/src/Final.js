import React from 'react'
import { Link } from 'react-router-dom'
import './Final.css'
const Final = () => {
  return (
    <div className='final-container'>
      <div className="final-subcontainer">
  <h1 className="text-font">Thank You!</h1><p className='text-font-sub'>for shopping with us</p>
  <p className="message-final">Your Booking has been confirmed<br></br><strong>Please check your email</strong> to track your order.</p>
  <hr/>
  <p className='contact-us-page'>
    Having trouble? <Link to="/contact">Contact us</Link>
  </p>
  <p className="lead">
    <Link className="btn-gohome" to='/'><button className='btn-go'>Back to home</button></Link>
  </p>
</div>
    </div>
  )
}

export default Final

import React from 'react'
import './Purchase.css'
import { Link } from 'react-router-dom'
const Purchase = () => {
  return (
    <>
    <div className='row'>
      <div className='col-75'>
        <div className='container'>
          <form action=''>
            <div className='row'>
              <div className='col-50'>
                <h2 style={{paddingBottom:"40px",textAlign:"center"}}>Billing Address</h2>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Sanjana Shetty" className='inputvalue'/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="sanjanashetty@example.com" className='inputvalue'/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" className='inputvalue'/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Karkala" className='inputvalue'/>
             <div className='row'>
              <div className='col-50'>
              <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="Karnataka"  className='inputvalue'/>
              </div>
              <div className='col-50'>
              <label for="zip">Pin Code</label>
                <input type="text" id="zip" name="zip" placeholder="574104"  className='inputvalue'/>
              </div>
             </div>
             <div className='col-50'>
              <h3 style={{paddingBottom:"20px",textAlign:"center"}}>Payment</h3>
              <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Sanjana Shetty"  className='inputvalue'/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"  className='inputvalue'/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"  className='inputvalue'/>
            <div className='row'>
              <div className='col-50'>
              <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2023"  className='inputvalue'/>
              </div>
              <div className='col-50'>
              <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"  className='inputvalue'/>
              </div>
            </div>
             </div>
              </div>
            </div>
        <Link to="/final"><input type="submit" value="Continue to checkout" class="btn" ></input></Link>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default Purchase

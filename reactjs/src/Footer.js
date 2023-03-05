import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <footer class="site-footer" id='footer-id'>
      <div class="footer-container">
        <div class="row-footer">
          <div class="col-sm-12 col-md-6">
            <h6>Art Gallery</h6>
            <p class="text-justify">The Art Gallery serves people to explore and experience art, creativity, and our shared humanity.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <ul class="footer-links">
           <h6> <li><a href="#">Contact Us</a></li></h6>
              <li>&#128222;<a href="#">+91-1234567890</a></li>
              <li>&#9993;<a href="#">artgallery@gmail.com</a></li>
              <li><a href='#'>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="footer-container">
        <div class="row-footer">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
</footer>
    </>
  );
}

export default Footer;
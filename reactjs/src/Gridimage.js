import React from 'react'
import { Link } from 'react-router-dom';
import './Mainsection_js.css';

import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image13 from './images/image13.jpeg'
import image5 from './images/image5.jpeg'
import image14 from './images/image14.jpeg'
import image7 from './images/image7.jpeg'
import image8 from './images/image8.jpeg'
import image9 from './images/image9.jpeg'
import image10 from './images/image10.jpeg'
import image11 from './images/image11.jpeg'
import image12 from './images/image12.jpeg'
import Footer from './Footer';


function Gridimage() {
  return (
    <>
    <div className='gridimage-section'>
    <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image1} alt="image1" />
        </Link>
        <div class="desc"><i>Pet Potrait-Sanjana Jain</i></div>
        </div>
      </div>

    <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image2} alt="image2" />
         </Link>
        <div class="desc"><i>Cute baby with butterfly-Treenal Pinto</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image3} alt="image3" />
        </Link>
        <div class="desc"><i>NFT-Sanjana Shetty</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image14} alt="image14" />
        </Link>
        <div class="desc"><i>3D Art-Treenal Pinto</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image13} alt="image13" />
        </Link>
        <div class="desc"><i>Minion-Saaket Shetty</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image5} alt="image5" />
        </Link>
        <div class="desc"><i>Goddess Mahakali-Sanjana Jain</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image12} alt="image12" />
        </Link>
        <div class="desc"><i>VEXX Doodle-Saaket Shetty</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image7} alt="image7" />
        </Link>
        <div class="desc"><i>Masquerade Mask-Sanjana Jain</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image8} alt="image8" />
        </Link>
        <div class="desc"><i>Canvas Painting-Sanjana Jain</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image9} alt="image9" />
        </Link>
        <div class="desc"><i>Mandala Art-Sanjana Jain</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image10} alt="image10" />
        </Link>
        <div class="desc"><i>Bhoota Kola-Sanjana Jain</i></div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
        <Link to="/login">
          <img src={image11} alt="image11" />
        </Link>
        <div class="desc"><i>Dot Mandala-Sanjana Jain</i></div>
        </div>
      </div>
      </div>
      <Footer/>
      
    </>
  )
}

export default Gridimage

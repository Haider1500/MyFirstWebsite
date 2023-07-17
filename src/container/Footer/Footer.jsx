import React from 'react';
import {images} from '../../constants'
import './Footer.css';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import {FooterOverlay,Newsletter} from '../../components';


const Footer = () => (
  <div className='app__footer section__padding' id='contact'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-content'>
      <div className='app__footer-contactus '>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-img '>
        <img src={images.gericht} alt="gericht-image" className='gericht_img'/>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} style={{marginTop: '1rem'}} alt="spoon_img"/>
        <div className='app__footer-img_logos '>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>

      </div>
      <div className='app__footer-timings'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p> 
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p> 
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div> 
      <div className='app__footer-copyrights'>
        <p className='p__opensans'>2021 Gericht. All Rights Reserved.</p>
        </div>
  </div> 
);

export default Footer;

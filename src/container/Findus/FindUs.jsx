import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants'
import './FindUs.css';

const FindUs = () => (
  <div className='app__findus section__padding '>
    <div className='app__findus-content'>
      <div className='app__findus-content_heading' style={{margin: '2rem 0'}}>
        <SubHeading title={'Contact'}/>
        <h1 className='headtext__cormorant'>Find Us</h1>
      </div>
      <div className='app__findus-content_body'>
        <p className='p__opensans' >Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className='p__cormorant' style={{margin: '2rem 0',color: '#DCCA87'}}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='app__header_button'>Visit Us</button>
    </div>
    <div className='app__findus-img'>
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;

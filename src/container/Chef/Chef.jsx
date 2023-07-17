import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';


import './Chef.css';

const Chef = () => (
  <div className='app__chef section__padding flex__center' id=''>
    <div className='app__chef_img flex__center'>
       <img src={images.chef} alt="chef__image" /> 
    </div>    
    <div className='app__chef_content '>
      <div className='app__chef_content-subheading'>
        <SubHeading title={'Chef’s Word'}/>
      </div>
      <div className='app__chef_content-heading'>
        <h1 className='headtext__cormorant'>What we believe in</h1>
      </div>
      <div className='app__chef_content-para'>
        <div className='app__chef_content-para--head'>
          <img src={images.quote} alt="" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className='app__chef_content-name'>
        <p style={{color:'#DCCA87'}} className='p__cormorant'>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
      </div>
      <div className='app__chef_content-sign--img'>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;

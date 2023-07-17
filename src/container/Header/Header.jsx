import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>

    <div className='app__header_info '>
      <SubHeading style={{}} title={"Chase the new Flavour"}/>

      <h1 style={{marginBottom:'1rem'}} className='app__header_h1'>The Key To Fine Dining </h1>

      <p className='p__opensans' style={{margin:'1rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi 
      facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>


      <button style={{margin:'1rem 0'}} className='app__header_button'>Explore Now</button>
    </div>

    <div className='app__header_img'>
      
      <img src={images.welcome} alt="welcome" />
      
    </div>
  </div>
);


export default Header;

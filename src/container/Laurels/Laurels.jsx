import React from 'react';
import {SubHeading} from '../../components'
import {images,data} from '../../constants'

import './Laurels.css';

const Awards=({award:{imgUrl,title,subtitle}})=>(
  <div className='app_laurels_awards_card' id='awards'>
    {<img src={imgUrl} alt={title}/> }
    <div className='app__laurels_awards-content'>
      <p className='app__laurels_awards-title p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='app__laurels_awards-subtitle p__opensans'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__laurels  section__padding'> 
    <div className='app__laurels_info '>
        <SubHeading title={'Awards & recognition'}/>
        <div className='headtext__cormorant'>Our Laurels
        </div>
        <div className='app__laurels_awards '>
            {data.awards.map(award=><Awards award={award}  />)}
        </div>
    </div>

    <div className='app__laurels_img'>
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;

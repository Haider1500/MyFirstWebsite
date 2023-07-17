import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuitem'>
        <div className='app__menuitem_head'>
          <div className='app__menuitem_head-title'>
            <p style={{color:'#DCCA87'}} className='p__cormorant'>{title}</p>
          </div>
          <div className='app__menuitem_head-dash'/>
          <div className='app__menuitem_head-price'>
            <p className='p__opensans'>{price}</p>
          </div>
        </div>
        <div style={{color:'#AAAAAA'}} className='app__menuitem_sub'>{tags}</div>
  </div>
);

export default MenuItem;

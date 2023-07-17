import React from 'react';
import {images} from '../../constants'
import './SpecialMenu.css';
import {SubHeading,MenuItem} from '../../components'
import {data} from '../../constants' 

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding flex__center' id='menu'>
    <div className='app__specialMenu_title flex__center'>
      <SubHeading title={'Menu that fits you palatte'}/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu_menu flex__center'>
      <div className='app__specialMenu_menu_shakes'>
        <p className='app__specialMenu_menu-heading'>Milk Shakes</p>        
      <div className='app__specialMenu_menu-items'>
        {data.shakes.map((shake,index)=>(
          <MenuItem title={shake.title} price={shake.price} tags={shake.tags}/>
        ))}
      </div>
      </div>

      <div className='app__specialMenu_menu_img'>
        <img src={images.menu} alt="" />
      </div>

      <div className='app__specialMenu_menu_drinks'>
      <p className='app__specialMenu_menu-heading'>Desi Mashruub</p>
      <div className='app__specialMenu_menu-items'>
        {data.drinks.map((drink,index)=>(
          <MenuItem title={drink.title} price={drink.price} tags={drink.tags}/>

        ))}
      </div>
      </div>

    </div>
        <button className='app__header_button'>View More</button>
  </div>
);

export default SpecialMenu;

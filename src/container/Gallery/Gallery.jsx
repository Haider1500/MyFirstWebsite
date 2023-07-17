import React, { useRef, useState } from 'react';
import {images} from '../../constants'
import {BsArrowRightShort,BsArrowLeftShort,BsInstagram,} from 'react-icons/bs'

import './Gallery.css';
import { SubHeading } from '../../components';



const myImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04] 

const Gallery = () => {
   
const handleClick = (direction) =>{
   const {current} = scrollRef;
      if (direction === 'left'){
        current.scrollLeft -= 300 
      }else{
         current.scrollLeft += 300 
      }
}



   const scrollRef = React.useRef(null)  
   return(
  <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title={'Instagram'}/>
        <h1 className='headtext__cormorant' style={{marginBottom: '1rem'}}>Photo Gallery</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button style={{marginTop: '2rem'}} className='app__header_button'>View More</button>
      </div>
      <div className='app__gallery-images'> 
         <div className='app__gallery-image_container' ref={scrollRef}>
            {myImages.map((image,index)=>
            <div className='app__gallery-image_card flex__center'   key={`app__gallery-image${index}`}>
               <img src={image} alt={'gallery image'} />
               <BsInstagram className='app__gallery-icon'/>
            </div>
            )}
         </div>
      <div className='app__gallery-arrows'>
         <BsArrowLeftShort className='app__gallery-arrows_leftarrow both_arrows' onClick={()=>handleClick('left')}/>
         <BsArrowRightShort className='app__gallery-arrows_rightarrow both_arrows' onClick={()=>handleClick('right')}/>
      </div> 

     </div> 
  </div> 
)};

export default Gallery;

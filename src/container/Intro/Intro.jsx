import React, { useState } from 'react';
import {meal} from '../../constants/index'
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import './Intro.css';

const Intro = () => {
const [playVideo, setPlayVideo] = useState(false)

const handleVideo=()=>{
      setPlayVideo((prevVideo)=>(!prevVideo))
      if (playVideo){
        vidRef.current.pause()
      }else{
        vidRef.current.play()
      }
}

const vidRef = React.useRef()
return(
  <div className='app__intro section_padding flex__center'>
    <video 
      src={meal}
      ref={vidRef}
      loop
      controls= {false}
      typeof='video/mp4'
      muted
    >
    </video>
    <div className='app__intro_overlay flex__center' >
      <div className='app__intro_overlay-circle flex__center'
      onClick={handleVideo}> 
      {playVideo?<BsPauseFill color='#fff' fontSize={30}/>:<BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div>

)};

export default Intro;

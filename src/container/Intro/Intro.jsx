import React, { useState } from 'react';
import meal from '../../assets/meal.mp4';
import {BsFillPauseBtnFill, BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import './Intro.css';

const Intro = () => {
  const [playVideo,setPlayVideo]=useState(false);
  const vidRef=React.useRef()
  function handleVideo(){
    setPlayVideo((prevVidState)=>!prevVidState)
    if(playVideo){
      vidRef.current.pause();
    }else vidRef.current.play();
  }
return(
  <div className='w-[100%] h-[100%]  relative'>
  <video src={meal}
  controls={false}
  loop
  ref={vidRef}
  >
  </video>
  <div className='video__overlay'>
{playVideo?<BsPauseFill className='w-[48px] h-[48px] rounded-[50%] ' onClick={handleVideo}/>:<BsFillPlayFill className='w-[48px] h-[48px] rounded-[50%] ' onClick={handleVideo}/>}
  </div>
    </div>
  )}
 

export default Intro;

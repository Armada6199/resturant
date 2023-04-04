import React from 'react';
import images from '../../constants/images';

import './Chef.css';

const Chef = () => (
 <div className='w-[100%] h-[100%] md:h-[100vh] chef__main'>
<div className='flex flex-col items-center justify-between md:flex md:flex-row md:items-center md:justify-around h-[100%] md:h-[100vh] '>
  <div>
<img src={images.chef} alt="" className=' w-[100%] h-[550px]  md:block md:w-[480px] md:h-[550spx] my-5' />
  </div>
  <div className='flex flex-col items-center justify-around md:items-start mx-5'>
<h5 className='text-white my-5'>Chef's Word</h5>
<img src={images.spoon} alt="" className='my-2'/>
<h1 className='text-[#DCCA87] text-4xl m:text-7xl my-2'>What We Believe In</h1>
<div className='my-5'><img src={images.quote} alt="" className='w-[20px] h-[20px] md:w-[40px] md:h-[40px] ' /><p className='text-white opacity-75 max-w-[500px] inline-block'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dolore quod sapiente commodi similique voluptate optio fugit ratione ut eum sint minus excepturi, ad voluptatibus repellendus deserunt, reprehenderit distinctio illum.</p></div>
  <h5 className='text-[#DCCA87] text-4xl '>Kevin Luo</h5>
  <p className='text-white opacity-75 text-sm'>Chef & Founder</p>
  <img src={images.sign} alt="" className='w-[180px] h-[50px] my-5' />
  </div>
</div>  
 </div>
);

export default Chef;

import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='aboutus__main w-[100%] h-[100%] md:h-[100vh] z-0'>
    <div className='flex flex-col items-center justify-between md:flex md:flex-row md:justify-around md:items-center '>
      <div className='mx-10' >
<h1 className='text-[#DCCA87;] text-7xl'>About Us</h1>
<p className='w-[250px] text-white opacity-75 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla qui laudantium esse iste reiciendis atque aut at magnam, dolorem ut quaerat voluptatibus accusamus.</p>
      <button className='bg-[#DCCA87;] font-semibold w-[150px] h-[35px] float-right mt-5'>Know More</button>
      </div>
      <div  className='mx-10'>
<img src={images.knife} alt="" className='w-[100%] h-[600px]' />
      </div>
      <div  className='ml-10'>
      <h1 className='text-[#DCCA87;] text-7xl'>Our History</h1>

      <p className='w-[250px] text-white opacity-75 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla qui laudantium esse iste reiciendis atque aut at magnam, dolorem ut quaerat voluptatibus accusamus.</p>
      <button className='bg-[#DCCA87;] font-semibold w-[150px] h-[35px] float-right mt-5'>Know More</button>

      </div>
      <img src={images.G} alt="" className='g__image absolute w-[30%] h-[50%]' />
    </div>
  </div>
);

export default AboutUs;

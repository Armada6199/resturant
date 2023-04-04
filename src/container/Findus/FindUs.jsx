import React from 'react';
import './findus.css'
import images from '../../constants/images';
const   FindUs = () => (
  <div className='w-[100%] h-[100%] md:h-[100vh]'>
<div className="flex flex-col items-center justify-center md:flex-row md:justify-around md:items-center findus__main h-[100vh]">
<div className='flex flex-col md:items-start items-center'>
<h5 className='text-white text-5xl'>Contact</h5>
<img src={ images.spoon}alt="" className='mt-2' />
<h1 className='text-[#DCCA87] text-5xl my-5'>Find Us</h1>
<p className='text-white opacity-75 font-semibold '>Amman , Siventh Circle , King Abdullah ST</p>
<h1 className='text-[#DCCA87] text-3xl mb-2 mt-5'>Opening Hours</h1>
<p className='text-white opacity-90 font-semibold '>Mon - Fri: 10:00 am - 02:00 am</p>
<p className='text-white opacity-90 font-semibold '>Sat - Sun: 10:00 am - 03:00 am</p>
<button className='bg-[#DCCA87] w-[150px] h-[45px] font-semibold my-5'>Vist Us</button>
</div>
<div>
  <img src={images.findus} alt="findus" className='hidden md:block md:w-[450px]' />
</div>
</div>
  </div>
);

export default FindUs;

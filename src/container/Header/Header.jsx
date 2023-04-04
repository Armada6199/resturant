import React from 'react';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
<div className='w-[100%] h-[100vh] md:h-[100vh] bg-black flex flex-col'>
  <div className='flex flex-col md:flex-row items-center  justify-around'>
<div className='flex flex-col items-center mx-5 my-5  justify-between md:items-start '>
  <p className='text-white text-2xl'>Chace The New Flavour</p>
  <h1 className='text-[#DCCA87;] text-7xl w-[360px] mt-5 '>The Key To Fine Dining</h1>
  <p className='text-white w-[300px] my-7 opacity-75'>Set within the five-star The Berkeley Hotel in Knightsbridge, we offer an outstanding fine dining experience in a warm and welcoming dining room..</p>
<button className='bg-[#DCCA87;] font-semibold w-[150px] h-[35px]'>Explore Now</button>
</div>
<div className='w-[80%] md:w-[40%] mt-10'>
  <img src={images.welcome} alt="" className=' md:w-[90%] md:h-[90%] md:block  '/>
</div>
  </div>

</div>
);

export default Header;

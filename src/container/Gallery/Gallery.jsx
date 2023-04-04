import React from 'react';
import images from '../../constants/images';
import {SlSocialInstagram} from 'react-icons/sl'
import './Gallery.css';

const Gallery = () => (
  <div className='w-[100%] h-[110%] md:h-[500px ]  gallery__main'>
   <div className='flex flex-col items-center justify-center md:flex-row md:justify-around md:items-center  h-[100%]'>
     <div className='flex flex-col justify-evenly items-center md:items-start'>
      <h5 className='text-white text-md mt-5'>Instgrame</h5>
      <img src={images.spoon} alt="sppon" />
      <h1 className='text-5xl text-[#DCCA87] my-3'>Photo Gallery</h1>
      <p className='text-white opacity-75 w-[300px] md:w-[500px] my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem quis atque, reprehenderit, nisi illum aliquam voluptatibus ea dolor nostrum rem .</p>
     <button className='bg-[#DCCA87] font-semibold w-[150px] h-[45px] my-3'>Know More</button>
     </div>
     <div className='flex flex-col justify-around items-center   md:flex md:flex-row md:items-center md:justify-around mx-1'>
      <div className='relative gallery__image my-5 flex justify-center w-[100%] md:mr-5 md:w-[20%]'>
        <div className='gallary__overlay'><SlSocialInstagram size='25px' color='#fff' width={27} height={27}/></div>
        <img src={images.gallery01} alt="" className='w-[200px] h-[300px] ' />
        </div>
      <div className='relative gallery__image my-5 flex justify-center w-[100%] md:mr-5 md:w-[20%]'>
      <div className='gallary__overlay'><SlSocialInstagram size='25px' color='#fff' width={27} height={27}/></div>
        <img src={images.gallery02} alt="" className='w-[200px] h-[300px] ' />
        </div>
      <div className='relative gallery__image my-5 flex justify-center w-[100%] md:mr-5 md:w-[20%]'>
      <div className='gallary__overlay'><SlSocialInstagram size='25px' color='#fff' width={27} height={27}/></div>
        <img src={images.gallery03} alt="" className='w-[200px] h-[300px] ' />
        </div>
      <div className='relative gallery__image my-5 flex justify-center w-[100%] md:mr-5 md:w-[20%]'>
      <div className='gallary__overlay '><SlSocialInstagram size='25px' color='#fff' /></div>
        <img src={images.gallery04} alt="" className='w-[200px] h-[300px] ' />
        </div>

   </div>
   </div>
  </div>
);

export default Gallery;

import React from 'react';
import images from '../../constants/images';
import './Footer.css';
import {SlSocialInstagram,SlSocialTwitter,SlSocialFacebook} from 'react-icons/sl'
const Footer = () => (
  <div className='w-[100%] h-[100%] md:h-[100vh] footer__main'>
    <div className='m-auto bg-[#0C0C0C] w-[70%] flex flex-col items-center justify-center h-[400px] md:h-[340px] '>
      <h5 className='text-white text-md'>Newsletter</h5>
      <img src={images.spoon} alt="" />
      <h1 className='text-[#DCCA87] text-5xl my-5'>Subscribe To Our Newsletter</h1>
      <p className='text-white opacity-75 fontsemibold mb-2'>Never Miss The Latest Updates</p>
      <div className='flex flex-col md:flex-row items-center'><input type="text" placeholder='Email Address' className='text-[#DCCA87] bg-transparent border-1-white w-[90%] md:w-[450px] p-2 border border-white h-[30px] md:h-[45px]' />
      <button className='bg-[#DCCA87] font-semibold h-[45px] m-auto md:mx-5 w-[150px] my-5'>Subscribe</button>
      </div>
    </div>
    <div className='w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-around md-items-center my-20'>
      <div className='flex flex-col items-center justify-between'>
        <h1 className='text-white text-5xl opacity-75 font-bold my-5'>Contact Us</h1>
        <p className='text-white font-semibold mb-2'>Amman , Siventh Circle , King Abdullah Street</p>
        <p className='text-white opacity-75 text-md'>+962-79-421-343-423</p>
        <p className='text-white opacity-75 text-md' >+962-79-432-323-433</p>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <img src={images.gericht} alt="" />
        <h1 className='text-white opacity-75 text-md'>"The best way to find yourself is to lose yourself in the service of others.”</h1>
      <div className='flex justify-between m-auto w-[50%] mt-5'>
        <SlSocialFacebook size={25} color='#fff'/>
        <SlSocialInstagram size={25} color='#fff'/>
        <SlSocialTwitter size={25} color='#fff'/>
      </div>
      </div>
      <div className='flex flex-col justify-around items-center'>
        <h1 className='text-white text-5xl opacity-75 font-bold my-5'>Working Hours</h1>
        <h5 className='font-semibold text-2xl opacity-75 text-white'>Mon-Friday :</h5>
        <p className='text-white opacity-75 text-md'>08:00 am-12:00 am</p>
        <h5 className='font-semibold text-2xl opacity-75 text-white mt-5'>Saturday-Sunday :</h5>
        <p className='text-white opacity-75 text-md'>07:00 am-11:00 pm</p>
      </div>

    </div>
  </div>
);

export default Footer;

import React from 'react';
import images from '../../constants/images';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className=' w-[100%] h-[100%] md:h-[100vh] z-0 bg-black'>
    <div className='mt-8 flex flex-col items-center justify-between'>
    <h5 className='text-white text-center'>Menu that fits you palatte</h5>
    <img src={images.spoon} alt="" className='mt-2' />
    <h1 className='text-[#DCCA87] text-center text-6xl mb-3'>Today's Special </h1>
    </div>
  <div className='flex flex-col items-center justify-between md:flex md:flex-row md:justify-around md:items-center  z-10 '>
  <div className='flex flex-col justify-start mx-10 h-[100vh] items-start'>
<h1 className='text-4xl text-center text-white w-[400px]'>Hot & Cold</h1>
<div className='flex flex-col'>
  <div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 min-w-[180px]'>American</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$14</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Hot | Glass</p>
</div>
<div>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 min-w-[180px]'>Coffee</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$9</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Hot| Cold </p>
</div>
<div>
<div className='flex items-center '>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 w-[180px]'>Chai</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$5</span>
  </div>

  </div>
  <p className='text-sm opacity-75 text-white'>Ice | Hot</p>
</div>
<div>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 w-[180px]'> ginger tea</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$22</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Hot</p>
</div>
<div>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 w-[180px]'>Green tea.</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$56</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Iced | Hot</p>
</div>
    </div>
    <div  className='mx-10 flex flex-col h-[100vh] items-center '>
    <img src={images.menu} alt=""  className=' w-[100%] h-[550px]  md:block md:w-[400px] md:h-[450px] my-5 '/>
      <button className='bg-[#DCCA87] w-[150px] h-[45px] font-semibold'>View More</button>
    </div>
    <div className='flex flex-col justify-start mx-10 h-[100vh] items-start'>
<h1 className='text-4xl text-center text-white w-[400px]'>Cocktails</h1>
<div className='flex flex-col'>
  <div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5'>Vantage Point</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$15</span>
  </div>
  <p className='text-sm opacity-75 text-white'>London Light | Coffee | Agave syrup</p>
</div>
<div>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5'>Shirley Ginger</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$20</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Club soda | Lime juice |  Grenadine</p>
</div>
<div>
<div className='flex items-center '>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 w-[180px]'>Magic Apple</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$54</span>
  </div>

  </div>
  <p className='text-sm opacity-75 text-white'>Japple cider | dashes bitters | Apple slice</p>
</div>
<div>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 min-w-[180px]'>Citrus Fizz</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$33</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Seedlip Grove | organic marmalade</p>
</div>
<div>
<div className='flex items-center '>
  <h5 className='text-3xl text-[#DCCA87] my-5 min-w-[180px]'>Mango Mule</h5>
<div className='w-[100px] h-[1px] bg-[#fff] mx-7'></div>
<span className='text-sm  text-white'>$9</span>
  </div>
  <p className='text-sm opacity-75 text-white'>Cucumber | Honey syrup | Mango puree | Lime Juice</p>
</div>
    </div>
  </div>
</div>
);

export default SpecialMenu;

import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css';
import images from '../../constants/images'

const Navbar = () => {
  const [navOpened,setNavOpened]=useState(false)
  console.log(navOpened)
return(
<div>
  <div className='bg-black flex flex-col justify-center items-center py-1 md:flex-row md:justify-around md:items-center z-10'>
  <img src={images.gericht} alt="" className='w-[150px] block'/>
  <ul className='text-white md:flex md:justify-around md:items-center hidden '>
<li  className='mx-5  hover:text-[#DCCA87;]  duration-500'><a href="#home">Home</a></li>
<li className='mx-5 hover:text-[#DCCA87;] duration-500'><a href="#aboutUs">About Us</a></li>
<li className='mx-5 hover:text-[#DCCA87;] duration-500'><a href="#Menu">Menu</a></li>
<li className='mx-5 hover:text-[#DCCA87;] duration-500'><a href="#home"> Awards</a></li>
<li className='mx-5 hover:text-[#DCCA87;] duration-500'><a href="#contact">Contact</a></li>
</ul>
<GiHamburgerMenu color='#fff' fontSize={27} className={`${navOpened?'hidden':'fixed top-3 right-3 md:hidden  sm:flex duration-500ms  ease-in'}`} onClick={()=>setNavOpened((prevNav)=>!prevNav)}/>
<MdOutlineRestaurantMenu  color='#DCCA87'fontSize={27} className={`${navOpened?'sm:flex fixed top-3 right-3 duration-500ms  ease-in':'hidden'}`} onClick={()=>setNavOpened((prevNav)=>!prevNav)}/>
<div className='text-white md:flex md:justify-around md:items-center hidden'>
<a href="/" className='text-decoraition-none text-white  login-book_table'>Login/Register</a>
<div className='w-[1px] bg-gray-400h-8 ml-5 mr-5  '></div>
<a href="" className='text-white  login-book_table'>Book Table</a>
</div>
</div>
<ul className={`text-white w-[100%] h-[100vh]  absoulte  bg-black duration-200 ease-in z-20  font-bold text-2xl ${!navOpened?'hidden -translate-x-[101%]':'flex flex-col items-center justify-center  translate-x-[0]'}`}>
<li  className='mx-5 my-5 hover:text-[#DCCA87;] hover:-translate-y-2 duration-500'><a href="#home">Home</a></li>
<li className='mx-5 my-5 hover:text-[#DCCA87;]  hover:-translate-y-2 duration-500'><a href="#aboutUs">About Us</a></li>
<li className='mx-5 my-5 hover:text-[#DCCA87;] hover:-translate-y-2 duration-500'><a href="#Menu">Menu</a></li>
<li className='mx-5 my-5 hover:text-[#DCCA87;] hover:-translate-y-2 duration-500'><a href="#home"> Awards</a></li>
<li className='mx-5 my-5 hover:text-[#DCCA87;] hover:-translate-y-2 duration-500'><a href="#contact">Contact</a></li>
</ul >
</div>

)
  
}

export default Navbar;

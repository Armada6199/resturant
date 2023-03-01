import React from 'react';
import images from '../../constants/images';
import './Laurels.css';
const AwardsCard=({award})=>(
  <div className='flex flex-col items-center justify-center md:flex md:flex-row md:justify-between my-5 mx-5 md:items-center w-[300px]  '>
<img src={award.image} alt="" className='w-[90px] h-[90px]' />
<div className='flex flex-col justify-between ml-5'>
  <h1 className='text-[#DCCA87] text-2xl'>{award.name}</h1>
  <p className='text-white opacity-75 w-[200px]'>{award.text}</p>
</div>
  </div>
)
const Laurels = () => {
const awards=[
  {
name:"Bib Gourmond",
text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus modi ",
image:images.award02,
},
{
  name:"Rising Star",
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus modi ",
  image:images.award01,
  },
  {
    name:"AA Hospitality",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus modi ",
    image:images.award05,
    },
    {
      name:"OutStanding Chef",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus modi ",
      image:images.award03,
      }
]
  return (
    <div className='w-[100%] h-[100%] md:h-[100vh] laurels__main'>
      <div className='flex flex-col items-center justify-center my-5 md:flex md:flex-row md:items-center md:justify-around w-[100%] h-[100%] md:h-[100vh]'>
        <div className='flex flex-col justify-center items-center md:flex md:flex-col md:justify-start'>
          <h5 className='text-white text-md my-3'>Awards & Reccognition</h5>
          <img src= {images.spoon } alt="spoon" />
          <h1 className='text-[#DCCA87] text-5xl'>Our Laurels</h1>
              <div className='grid grid-cols-1 gap-4 text-center mt-[50px] md:grid-cols-2 md:text-left'>
                {awards.map((award)=><AwardsCard award={award}/>)}
              </div>
        </div>
        <div  className='flex  items-center justify-center'>
        <img src={images.laurels} alt="" className='hidden md:w-[450px] md:h-[520px] md:block' />
  
        </div>
      </div>
    </div>
    )
    
}


export default Laurels;

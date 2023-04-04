import React from "react";
import images from "../../constants/images";
import "./SpecialMenu.css";

const DrinkCont=({drink})=>(
  <div className="flex flex-col mx-5">
  <div className="flex items-center ">
    <h5 className="text-2xl md:text-3xl text-[#DCCA87] min-w-[180px] w-[180px] md:w-[250px] my-5">{drink.name}</h5>
    <div className="w-[100px] h-[1px] bg-[#fff] mx-7"></div>
    <span className="text-sm  text-white">{drink.price}</span>
  </div>
  <p className="text-sm opacity-75 text-white">
    {drink.ingrediants}
  </p>
  </div>
)

const hotAndColds = [
  {
    name: "american",
    price: 14,
    ingrediants: "Hot/Glass",
  },
  {
    name: "Coffee",
    price: 9,
    ingrediants: "Hot/Cold",
  },
  {
    name: "Chai",
    price: 5,
    ingrediants: "Hot/Iced",
  },
  {
    name: "Ginger Tea",
    price: 9,
    ingrediants: "Hot/Glass",
  },
];
const coctails = [
  {
    name: "Vantage Point",
    price: 15,
    ingrediants: "London Light | Coffee | Agave Syrup",
  },
  {
    name: "Shirley Ginger",
    price: 20,
    ingrediants: "Club soda | Lime juice | Grenadine",
  },
  {
    name: "Magic Apple",
    price: 23,
    ingrediants: "Apple cider | Dashes bitters | Apple slice",
  },
  {
    name: "Cirtrus Fizz",
    price: 35,
    ingrediants: "Geedlip grove | Organic marmalade",
  },

];
const SpecialMenu = () => (
  <div className=" w-[100%] h-[100%] md:h-[100vh] z-0 bg-black">
    <div className="mt-8 flex flex-col items-center justify-between">
      <h5 className="text-white text-center">Menu that fits you palatte</h5>
      <img src={images.spoon} alt="" className="mt-2" />
      <h1 className="text-[#DCCA87] text-center text-6xl mb-3">
        Today's Special
      </h1>
    </div>
    <div className="flex flex-col items-center justify-between md:flex md:flex-row md:justify-around md:items-center  z-10 ">
      <div className="flex flex-col justify-start mx-10 h-[100vh] items-start">
        <h1 className="text-4xl text-center text-white w-[400px]">
          Hot & Cold
        </h1>
        {hotAndColds.map((drink)=><DrinkCont key={drink.name} drink={drink}/>)}
      </div>
      <div className="mx-10 flex flex-col h-[100vh] items-center ">
        <img
          src={images.menu}
          alt=""
          className=" w-[100%] h-[550px]  md:block md:w-[400px] md:h-[450px] my-5 "
        />
        <button className="bg-[#DCCA87] w-[150px] h-[45px] font-semibold">
          View More
        </button>
      </div>
      <div className="flex flex-col justify-start mx-10 h-[100vh] items-start">
        <h1 className="text-4xl text-center text-white w-[400px]">Cocktails</h1>
      {coctails.map((drink)=><DrinkCont drink={drink}/>)}
      </div>
    </div>
  </div>
);

export default SpecialMenu;

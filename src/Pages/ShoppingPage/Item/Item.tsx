import {FC, useState} from "react";
import "./item.scss";

interface itemProps{
    nameTree?:string;
    price?:string;
    picture?:string;
    season?:string;
    lifeExpect?:string;
}

export const Item:FC<itemProps> = ({nameTree,price,picture,season,lifeExpect}) => {
  return(
      <div className={"streak2 imageTree group relative mr-4 ml-2 h-4/5 w-2/5"}>
          <img className={`group-hover:opacity-0 absolute top-0 opacity-80 object-cover p-5 transition-all duration-500`} src={picture}/>
          <div className={`group-hover:opacity-100 opacity-0 absolute top-0 w-full h-full p-5 flex-column justify-start transition-all duration-500`}>
              <div className={"mt-2 ml-1 tracking-wider TreeName uppercase text-lg underline underline-offset-4 decoration-underline-red"}>{nameTree}</div>
              <div className={"mt-2 ml-4 description text-sm text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. </div>
              <div className={"mt-2 ml-4 tracking-wider"}><span className={"uppercase text-underline-red"}>Season : </span>{season}</div>
              <div className={"mt-2 ml-4 tracking-wider"}><span className={"uppercase text-underline-red"}>Life Expectancy : </span>{lifeExpect}</div>
              <div className={"flex justify-center items-center"}>
                  <div className={"mt-16 font-dreaming text-6xl"}>{price}</div>
              </div>
              <div className={"flex justify-center items-center"}>
                  <div className={"mt-10 buttonText tracking-wider uppercase text-underline-red navbar-link after:bg-underline-red py-2 px-9 focus:outline-none"}>Add to Cart</div>
              </div>
          </div>
      </div>
  )
}
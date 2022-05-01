import {FC, useState} from "react";
import "./ImageNetwork.scss";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";

interface ImageNetworkProps {
    urlImage?:string;
    larger?:string;
    name?:string;
    linkNetwork?:string;
    width?:string;
}

export const ImageNetwork:FC<ImageNetworkProps>= ({urlImage,larger,name,linkNetwork,width}) => {
    return(
        <div className={`contentIN relative w-1/4 h-full group hover:border-l-2 border-black hover:border-r-2`}>
            <img className={"imgIn group-hover:opacity-70 opacity-0 absolute imageNet top-0 object-cover z-0 transition-all duration-700"} src={urlImage}/>
            <div className={"textNetwork absolute flex justify-center w-full h-full items-center z-10 top-0  "}>
                <a className={`TN group-hover:font-semibold group-hover:scale-x-${larger} group-hover:scale-y-[4] group-hover:text-white transition-all duration-700 navbar-link-2 after:bg-underline-red after:[height:2px]`}  href={linkNetwork}  target="_blank">
                    {name}
                </a>

            </div>


        </div>
    )

}
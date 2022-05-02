import "./Footer.scss";
import {FC} from "react";
import {NavLink} from "react-router-dom";
// @ts-ignore
import logoF from "./logoF.png";

export const Footer:FC = () => {
    return(
        <div className={"z-1 Footer overflow-hidden"}>
            <NavLink id={"baliseDeMerde"} to={"/"}>
                <img className={"logoF"} src={logoF} alt={"logo tree commerce"}/>
            </NavLink>
            <NavLink className={"navlink navbar-link after:bg-white"} to={"/shopping"}>SHOPPING</NavLink>
            <NavLink className={"navlink navbar-link after:bg-white"} to={"/SignIn"}>ABOUT US</NavLink>
            <NavLink className={"navlink navbar-link after:bg-white"} to={"/contact"}>CONTACT US</NavLink>
            <NavLink className={"navlink navbar-link after:bg-white"} to={"/"}>CONDITIONS</NavLink>
        </div>
    )
  
}
import "./Footer.scss";
import {FC} from "react";
import {NavLink} from "react-router-dom";
// @ts-ignore
import logoF from "./logoF.png";

export const Footer:FC = () => {
    return(
        <div className={"Footer overflow-hidden "}>
            <NavLink id={"baliseDeMerde"} to={"/"}>
                <img className={"logoF"} src={logoF} alt={"logo tree commerce"}></img>
            </NavLink>
            <NavLink className={"navlink"} to={"/"}>SHOPPING</NavLink>
            <NavLink className={"navlink"} to={"/SignIn"}>ABOUT US</NavLink>
            <NavLink className={"navlink"} to={"/"}>CONTACT US</NavLink>
            <NavLink className={"navlink"} to={"/"}>CONDITIONS</NavLink>
        </div>
    )
  
}
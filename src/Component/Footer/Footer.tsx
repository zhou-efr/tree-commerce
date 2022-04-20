import "./Footer.scss";
import {FC, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
// @ts-ignore
import logoF from "./logoF.png";

export const Footer:FC = () => {
    return(
        <div className={"Footer overflow-hidden h-screen"}>
            <NavLink id={"baliseDeMerde"} to={"/"}>
                <img className={"logoF"} src={logoF}></img>
            </NavLink>
            <NavLink className={"NavLink"} to={"/"}>SHOPPING</NavLink>
            <NavLink className={"NavLink"} to={"/SignIn"}>ABOUT US</NavLink>
            <NavLink className={"NavLink"} to={"/"}>CONTACT US</NavLink>
            <NavLink className={"NavLink"} to={"/"}>CONDITIONS</NavLink>
        </div>
    )
  
}
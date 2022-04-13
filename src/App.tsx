import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {AnimatedLink} from "./Component";

function App() {
  return (
    <div>
        <div>
            <NavLink className={({isActive}) => `${isActive ? "font-bold":""} m-1`} to="/">Tree Commerce</NavLink >
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <AnimatedLink to={'/trees'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Trees</AnimatedLink> |{" "}
                <AnimatedLink to={'/login'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Login</AnimatedLink> |{" "}
                <AnimatedLink to={'/profile'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Profile</AnimatedLink>
            </nav>
            <Outlet />
        </div>
    </div>
  );
}

export default App;

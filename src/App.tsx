import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {AnimatedLink} from "./Component";
import {useAuth0} from "@auth0/auth0-react";

function App() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

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
                    {
                        isAuthenticated ? (
                            <AnimatedLink to={'/login'} onClick={loginWithRedirect} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Login</AnimatedLink>
                        ):(
                            <AnimatedLink to={'/logout'} onClick={logout} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Logout</AnimatedLink>
                        )
                    } |{" "}
                    <AnimatedLink to={'/profile'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Profile</AnimatedLink>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default App;

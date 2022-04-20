import {FC, useContext} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {AnimatedLink} from "../AnimatedLink/AnimatedLink";
import {UserContext} from "../../App";

interface ToolBarProps {
    onLogout: () => void;
}

export const ToolBar:FC<ToolBarProps> = (props) => {
    const context = useContext(UserContext);
    const isAuthenticated = context?.user !== null;
    return (
        <div>
            <div>
                <NavLink className={({isActive}) => `${isActive ? "scale-110":""} m-1`} to="/">Tree Commerce</NavLink >
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <AnimatedLink to={'/trees'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Trees</AnimatedLink> |{" "}
                    {
                        !isAuthenticated ? (
                            <>
                                <AnimatedLink to={'/login'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Login</AnimatedLink> |{" "}
                                <AnimatedLink to={'/register'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Register</AnimatedLink>
                            </>
                        ):(
                            <>
                                <AnimatedLink to={'/login'} redirect={'/'} onClick={() => props.onLogout()} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Logout</AnimatedLink> |{" "}
                                <AnimatedLink to={'/profile'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Profile</AnimatedLink>
                            </>
                        )
                    } |{" "}
                    <AnimatedLink to={'/cart'} hoverTextColor={"text-white"} hoverColor={"bg-black"}>Cart</AnimatedLink>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}
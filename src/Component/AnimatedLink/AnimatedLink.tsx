import "./AnimatedLink.scss";
import {FC, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

interface AnimatedLinkProps {
    className?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    notHoverClassName?: string;
    hoverClassName?: string;
    onClick?: () => void;
    redirect?: string;
    to: string;
}

export const AnimatedLink:FC<AnimatedLinkProps> = ({className, onClick, hoverColor, hoverTextColor, notHoverClassName, hoverClassName, to, redirect, children}) => {
    let [active, setActive] = useState(false);
    const navigate = useNavigate();

    if(typeof children !== "string")
        return <></>

    let text = children.split('');

    return (
        <NavLink className={({isActive}) => {setActive(isActive); return ""}} to={to} onClick={() => {
            if (onClick) {
                onClick();
            }
            if (redirect) {
                navigate(redirect);
            }}}>
            <div className={"AnimatedLink inline-block mx-1 ".concat(className as string)} onClick={() => console.log(to)}>
                {
                    text.map((character, index) => {
                        return (
                            <span key={index}>
                            <i className={`p-1 ${active ? "font-bold" : ""} `
                                .concat(active ? (
                                    (hoverColor as string).concat(" ")
                                    .concat(hoverTextColor as string).concat(" ")
                                    .concat(hoverClassName as string)
                                ) : notHoverClassName as string)}
                            >
                                {character}
                            </i>
                            <i className={"p-1 "
                                .concat(hoverColor as string).concat(" ")
                                .concat(hoverTextColor as string).concat(" ")
                                .concat(hoverClassName as string)}
                            >
                                {character}
                            </i>
                        </span>
                        );
                    })
                }
            </div>
        </NavLink >
    );
}
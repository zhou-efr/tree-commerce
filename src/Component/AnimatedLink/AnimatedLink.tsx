import "./AnimatedLink.scss";
import {FC, useState} from "react";
import {NavLink} from "react-router-dom";

interface AnimatedLinkProps {
    className?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    notHoverClassName?: string;
    hoverClassName?: string;
    onClick?: () => void;
    to: string;
}

export const AnimatedLink:FC<AnimatedLinkProps> = ({className, onClick, hoverColor, hoverTextColor, notHoverClassName, hoverClassName, to, children}) => {
    let [active, setActive] = useState(false);

    if(typeof children !== "string")
        return <></>

    let text = children.split('');

    return (
        <NavLink className={({isActive}) => {setActive(isActive); return ""}} to={to} onClick={onClick}>
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
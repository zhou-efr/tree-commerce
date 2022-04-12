import "./AnimatedLink.scss";
import {FC} from "react";

interface AnimatedLinkProps {
    className?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    notHoverClassName?: string;
    hoverClassName?: string;
    to: string;
}

export const AnimatedLink:FC<AnimatedLinkProps> = ({className, hoverColor, hoverTextColor, notHoverClassName, hoverClassName, to, children}) => {
    if(typeof children !== "string")
        return <></>

    let text = children.split('');

    return (
        <div className={"AnimatedLink ".concat(className as string)} onClick={() => console.log(to)}>
            {
                text.map((character, index) => {
                    return (
                        <span key={index}>
                            <i className={"p-1 "
                                .concat(notHoverClassName as string)}
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
    );
}
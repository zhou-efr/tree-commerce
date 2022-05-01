import {FC} from "react";
// @ts-ignore
import img4 from "../img/img4.png";
import {Link} from "react-router-dom";

interface ShoppingProps {
    entered: boolean;
    animatEnd: boolean;
    onHoverEnd: () => void;
    onHoverStart: () => void;
}

export const Shopping:FC<ShoppingProps> = ({ entered, animatEnd, onHoverEnd, onHoverStart }) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className={"flex w-4/5 h-full ".concat(entered?"fadeIn":"fadeOut").concat(animatEnd ? " hidden": "")}
            onMouseLeave={onHoverEnd}
            onMouseEnter={onHoverStart}
        >
            <div className={"w-3/5 border-r-2 border-black grid grid-cols-3 pl-10 py-3 text-sm ml-10"}>
                <div className={"row-span-1 flex flex-col ml-16"}>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Continent</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Europe</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>North America</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>South America</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Asia</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Africa</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Oceania</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Ocean</Link>
                    </div>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Color</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Green</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Brown</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Red</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Yellow</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Purple</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Black</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Orange</Link>
                    </div>
                </div>
                <div className={"row-span-2 flex flex-col ml-10"}>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Season</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>All Season</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Winter</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Summer</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Spring</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Autumn</Link>
                    </div>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Life expectancy</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Long</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Medium</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Short</Link>
                    </div>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Price</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>All Price</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Collection</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>For everyone</Link>
                    </div>
                </div>
                <div className={"row-span-2 flex flex-col"}>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Our Collections</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Kenya</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Tea Party</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Post-Apocalypse</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Summer by the sea</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Summer by the sea</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Cozy Winter</Link>
                    </div>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <p className={"font-medium"}>Color</p>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Green</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Brown</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Red</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Yellow</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Purple</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Black</Link>
                        <Link className={"navbar-link after:bg-black font-light"} to={"/"}>Orange</Link>
                    </div>
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <Link className={"font-medium text-underline-red navbar-link after:bg-underline-red"} to={"/"}>Promotions</Link>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col w-1/3 pl-3 py-3 -mt-2"}>
                <p className={"text-normal font-medium mb-1"}>Special collection : Trees of Kenya</p>
                <img className={"w-2/3"} src={img4} alt={"tree"}/>
            </div>
        </div>
    );
}
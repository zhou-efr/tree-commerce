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
            <div className={"w-2/3 border-r-2 border-black grid grid-cols-3 p-3 text-sm"}>
                <div className={"row-span-2 flex flex-col ml-20"}>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Continent</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Europe</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>North America</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>South America</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Asia</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Africa</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Oceania</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Ocean</Link>
                    </div>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Color</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Green</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Brown</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Red</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Yellow</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Purple</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Black</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Orange</Link>
                    </div>
                </div>
                <div className={"row-span-2 flex flex-col ml-20"}>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Season</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>All Season</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Winter</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Summer</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Spring</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Autumn</Link>
                    </div>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Life expectancy</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Long</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Medium</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Short</Link>
                    </div>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Price</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>All Price</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Collection</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>For everyone</Link>
                    </div>
                </div>
                <div className={"row-span-2 flex flex-col ml-20"}>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Our Collections</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Kenya</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Tea Party</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Post-Apocalypse</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Summer by the sea</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Summer by the sea</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Cozy Winter</Link>
                    </div>
                    <div className={"p-3  flex flex-col"}>
                        <p className={"font-bold"}>Color</p>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Green</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Brown</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Red</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Yellow</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Purple</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Black</Link>
                        <Link className={"navbar-link after:bg-black"} to={"/"}>Orange</Link>
                    </div>
                    <div className={"p-3  flex flex-col"}>
                        <Link className={"font-bold text-underline-red navbar-link after:bg-underline-red"} to={"/"}>Promotions</Link>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col w-1/3 p-3"}>
                <p className={"text-lg"}>Special collection : Trees of Kenya</p>
                <img className={"w-2/3"} src={img4} alt={"tree"}/>
            </div>
        </div>
    );
}
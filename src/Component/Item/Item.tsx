import {FC, useContext} from "react";
import "./item.scss";
import {BasketContext, TreeType, UserContext} from "../../App";

interface itemProps{
    tree: TreeType;
    key?: string | number;
}

export const Item:FC<itemProps> = ({tree, key}) => {
    const basketContext = useContext(BasketContext) ;
    const userContext = useContext(UserContext) ;
    // const portrait = window.matchMedia("(orientation: portrait)");

    if (!tree) return <></>;

    return(
        <>
            <div key={key} className={"hidden lg:block bg-white -my-px streak2 imageTree group relative mr-4 ml-2 h-4/5"}>
                <a href={tree.picture_link} target={"_blank"} rel="noreferrer">
                    <img className={`group-hover:opacity-0 absolute top-0 opacity-80 h-full w-full object-cover p-5 transition-all duration-500`} src={tree.picture} alt={tree.picture_author}/>
                </a>
                <div className={`group-hover:opacity-100 opacity-0 absolute top-0 w-full h-full p-5 flex-column justify-start transition-all duration-500`}>
                    <div className={"mt-2 ml-1 tracking-wider TreeName uppercase text-lg underline underline-offset-4 decoration-underline-red"}>{tree.TaxonName}</div>
                    <div className={"mt-2 ml-4 description text-sm text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. </div>
                    <div className={"mt-2 ml-4 tracking-wider"}><span className={"uppercase text-underline-red"}>Season : </span>{tree.season}</div>
                    <div className={"mt-2 ml-4 tracking-wider"}><span className={"uppercase text-underline-red"}>Life Expectancy : </span>{tree.life_expectancy}</div>
                    <div className={"flex justify-center items-center"}>
                        <div className={"mt-16 font-dreaming text-6xl"}>S${(tree.price/100).toFixed(2)}</div>
                    </div>
                    <div onClick={() => basketContext?.addToCart(tree, basketContext?.basket, userContext?.user)} className={"flex justify-center items-center"}>
                        <div className={"cursor-pointer mt-10 buttonText tracking-wider uppercase text-underline-red navbar-link after:bg-underline-red py-2 px-9 focus:outline-none"}>Add to Cart</div>
                    </div>
                </div>
            </div>
            <div className={"lg:hidden h-32 flex items-center justify-around border-black border-t-2"}>
                <img className={`h-4/5 aspect-square`} src={tree.picture} alt={tree.picture_author}/>
                <div className={"w-2/3 h-full relative flex flex-col justify-around"}>
                    <div className={"absolute top-0 left-0 w-full h-full flex justify-center items-end p-4"}>
                        <div className={"opacity-75 font-dreaming text-6xl"}>S${(tree.price/100).toFixed(2)}</div>
                    </div>
                    <h3 className={"text-lg"}>{tree.TaxonName}</h3>
                    <p
                        onClick={() => basketContext?.addToCart(tree, basketContext?.basket, userContext?.user)}
                        className={"text-underline-red w-full text-right"}
                    >
                        ADD TO CART
                    </p>
                </div>
            </div>
        </>
    )
}
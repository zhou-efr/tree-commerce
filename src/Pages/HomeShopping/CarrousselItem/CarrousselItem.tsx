import {FC, useContext} from "react";
import {BasketContext, TreeType, UserContext} from "../../../App";
import "../../../Component/ToolBar/ToolBar.scss";


interface CarrousselItemProps {
    tree: TreeType;
}

export const CarrousselItem:FC<CarrousselItemProps> = ({tree}) => {
    const basketContext = useContext(BasketContext) ;
    const userContext = useContext(UserContext) ;
    return (
        <div className={` border-b-2 border-black w-full h-[70vh] pt-5 pb-16 flex flex-row`}>
            <img className={"ml-24 mr-16 px-24 object-cover my-5 w-full h-auto"} src={tree.picture} alt={tree.picture_author}/>
            <div className={"mt-20 flex flex-col justify-start mr-28"}>
                <div className={"mb-10 text-lg tracking-wider uppercase"}>{tree.TaxonName}</div>
                <div className={"mb-10 tracking-wide text-justify"}>{tree.description}</div>
                <div className={"flex justify-end -mr-16 -mt-20 mb-6"}>
                    <div className={" -mt-12 rotate-30 font-light rotate-12  opacity-30  ml-20 font-dreaming text-underline-red text-9xl"}> S${(tree.price/100).toFixed(2)}</div>
                </div>
                <div className={"flex justify-center items-center"}>
                    <div onClick={() => basketContext?.addToCart(tree, basketContext?.basket, userContext?.user)} className={"cursor-pointer tracking-wider text-underline-red text-lg group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px]"}>
                        Add to Cart
                    </div>
                </div>
            </div>

        </div>
    )

}
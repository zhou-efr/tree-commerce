import {FC, useContext} from "react";
import {BasketContext, UserContext} from "../../../App";
import {Link, useNavigate} from "react-router-dom";
import {Footer} from "../../../Component";
import {ListItem} from "./listItem/listItem";
import {PrintItem} from "./PrintItem/PrintItem";
import "./Cart.scss";
// @ts-ignore
import pinkTree from "./pinkTree.png";



export const Cart:FC = () => {
    const contextBasket = useContext(BasketContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (userContext?.user){
            if(contextBasket?.basket && contextBasket.basket.length > 0) {
                navigate('/checkout');
            }else {
                alert('Your basket is empty');
            }
        }else {
            alert("Please log in first");
        }
    }

    return (
        <div className={`h-[79vh] overflow-hidden`}>
            <div className={`h-[67vh] flex overflow-hidden`}>
                <div className={"noscroll overflow-y-scroll w-1/3 border-x-2 border-black"}>
                    {
                        contextBasket?.basket && contextBasket.basket.length > 0 ?
                            contextBasket.basket.map((item, index) => {
                                return <ListItem key={index} tree={item}/>
                            })
                            :
                            <div className={`flex flex-col items-center justify-center`}>
                                <img src={pinkTree} alt="pinkTree"/>
                                <h1 className={`text-3xl text-center`}>Your basket is empty</h1>
                                <Link to={'/'} className={`text-xl text-center`}>
                                    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
                                        Go to shop
                                    </button>
                                </Link>
                            </div>
                    }
                </div>
                <div className={"w-2/3 flex flex-col justify-start"}>
                    <PrintItem tree={(contextBasket?.basket && contextBasket.basket.length > 0)?contextBasket?.basket[contextBasket?.basket?.length-1]:null}/>
                    <div className={`ml-[62%] border-black border-t-2 border-x-2 -mt-px h-full w-1/4 flex flex-col justify-start items-center`}>
                        <div className={"text-xl tracking-wider mt-6"}>TOTAL PRICE : </div>
                        <div className={"text-xl tracking-wider"}>S${((contextBasket?.basket?.reduce((a, b) => a + b.price, 0) || 0)/100).toFixed(2)}</div>
                        <div onClick={() => handleCheckout()} className={"tracking-widest text-underline-red navbar-link after:bg-underline-red py-1 px-9 focus:outline-none"}>Order now</div>
                    </div>

                    {/*<div className={"m-3"}>*/}
                    {/*    {*/}
                    {/*        contextBasket?.basket?.map(item => (*/}
                    {/*            <div key={item.TaxonName}>*/}
                    {/*                <h3><Link className={"inline-block"} to={`/trees/${item.TaxonName}`}>{item.TaxonName}</Link> - {item.price}S$</h3>*/}
                    {/*            </div>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</div>*/}
                    {/*<h4 className={"mt-2"}>*/}
                    {/*    Total: {contextBasket?.basket?.reduce((a, b) => a + b.price, 0).toFixed(2)}S$*/}
                    {/*    <button onClick={() => handleCheckout()} className={"inline-block p-1 px-2 shadow-md ml-2"}>Checkout</button>*/}
                    {/*</h4>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
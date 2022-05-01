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
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                    <ListItem nameTree={"NAME TREE"} price={"99.99€"}/>
                </div>
                <div className={"w-2/3 flex flex-col justify-start"}>
                    <PrintItem nameTree={"Tree Name"} price={"99.99€"} season={"Autumn"} lifeExpectancy={"5 years"} urlImage={pinkTree}/>
                    <div className={`ml-[62%] border-black border-t-2 border-x-2 -mt-px h-full w-1/4 flex flex-col justify-start items-center`}>
                        <div className={"text-xl tracking-wider mt-6"}>TOTAL PRICE : </div>
                        <div className={"text-xl tracking-wider"}>{contextBasket?.basket?.reduce((a, b) => a + b.price, 0).toFixed(2)}€</div>
                        <div className={"mt-2 tracking-widest text-underline-red navbar-link after:bg-underline-red py-2 px-9 focus:outline-none"}>Order now</div>

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
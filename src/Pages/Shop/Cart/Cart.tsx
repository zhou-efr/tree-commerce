import {FC, useContext} from "react";
import {BasketContext, UserContext} from "../../../App";
import {Link, useNavigate} from "react-router-dom";

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
        <div className={"m-2"}>
            <h1 className={"text-2xl"}>Basket</h1>
            <div className={"m-3"}>
                {
                    contextBasket?.basket?.map(item => (
                        <div key={item.TaxonName}>
                            <h3><Link className={"inline-block"} to={`/trees/${item.TaxonName}`}>{item.TaxonName}</Link> - {item.price}S$</h3>
                        </div>
                    ))
                }
            </div>
            <h4 className={"mt-2"}>
                Total: {contextBasket?.basket?.reduce((a, b) => a + b.price, 0).toFixed(2)}S$
                <button onClick={() => handleCheckout()} className={"inline-block p-1 px-2 shadow-md ml-2"}>Checkout</button>
            </h4>
        </div>
    );
}
import {FC, useContext} from "react";
import {BasketContext} from "../../../App";
import {Link} from "react-router-dom";

export const Cart:FC = () => {
    const contextBasket = useContext(BasketContext);

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
                Total: {contextBasket?.basket?.reduce((a, b) => a + b.price, 0)}S$
                <button className={"inline-block ml-3 p-1 px-2 shadow"}>Checkout</button>
            </h4>
        </div>
    );
}
import {FC, useContext, useEffect, useState} from "react";
import {BasketContext, UserContext} from "../../../App";
import {useNavigate} from "react-router-dom";
import {Footer} from "../../../Component";
import {ListItem} from "./listItem/listItem";
import {PrintItem} from "./PrintItem/PrintItem";
import "./Cart.scss";



export const Cart:FC = () => {
    const contextBasket = useContext(BasketContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const [printed, setPrinted] = useState(0);
    const [basket, setBasket] = useState(contextBasket?.basket || []);

    useEffect(() => {
        setBasket(contextBasket?.basket || []);
    }, [contextBasket]);


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

    function handleRemove(key: number) {
        console.log(key);
        contextBasket?.removeFromCart(key, contextBasket?.basket, userContext?.user)
    }

    return (
        <div className={`h-[79vh] overflow-hidden`}>
            {
                basket && basket.length > 0 ?
                    <div className={`h-[67vh] flex overflow-hidden`}>
                        <div className={"noscroll overflow-y-scroll w-1/3 border-x-2 border-black"}>
                            {
                                basket.map((item, index) => {
                                    return <ListItem onClick={() => {setPrinted(index)}} key={index} tree={item}/>
                                })
                            }
                        </div>
                        <div className={"w-2/3 flex flex-col justify-start"}>
                            <PrintItem tree={basket[printed]} key={printed} remove={() => handleRemove(printed)}/>
                            <div className={`ml-[62%] border-black border-t-2 border-x-2 -mt-px h-full w-1/4 flex flex-col justify-start items-center`}>
                                <div className={"text-xl tracking-wider mt-6"}>TOTAL PRICE : </div>
                                <div className={"text-xl tracking-wider"}>S${((contextBasket?.basket?.reduce((a, b) => a + b.price, 0) || 0)/100).toFixed(2)}</div>
                                <div onClick={() => handleCheckout()} className={"cursor-pointer tracking-widest text-underline-red navbar-link after:bg-underline-red py-1 px-9 focus:outline-none"}>Order now</div>
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
                    :
                    <div className={"flex flex-col h-[90vh]"}>
                        <div className={`h-[67vh] flex flex-row items-center justify-center bg-[#F3F3F3]`}>
                            <svg className={"scale-90"} width="537" height="484" viewBox="0 0 537 484" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M470.372 275.55L496.665 142.83C497.556 138.346 497.47 134.045 496.481 130.045C495.474 126.014 493.524 122.201 490.653 118.721C487.782 115.209 484.403 112.557 480.673 110.791C476.978 109.045 472.778 108.135 468.189 108.135H115.719L148.899 275.545C150.258 282.451 153.872 288.295 158.879 292.412C163.868 296.51 170.32 298.897 177.375 298.897H441.895C448.95 298.897 455.403 296.494 460.391 292.412C465.399 288.314 469.008 282.451 470.372 275.545L470.372 275.55ZM391.208 350.124C406.31 350.124 420.005 356.257 429.915 366.151C439.81 376.045 445.942 389.737 445.942 404.858C445.942 419.96 439.809 433.655 429.915 443.549C420.005 453.459 406.329 459.576 391.208 459.576C376.087 459.576 362.411 453.443 352.501 443.549C342.607 433.654 336.474 419.963 336.474 404.858C336.474 389.737 342.607 376.061 352.501 366.151C362.411 356.256 376.087 350.124 391.208 350.124ZM414.763 381.304C408.732 375.273 400.415 371.542 391.208 371.542C382.001 371.542 373.685 375.273 367.653 381.304C361.621 387.335 357.911 395.652 357.911 404.859C357.911 414.05 361.641 422.382 367.653 428.414C373.684 434.445 382.001 438.176 391.208 438.176C400.415 438.176 408.731 434.445 414.763 428.414C420.779 422.383 424.505 414.066 424.505 404.859C424.505 395.652 420.775 387.336 414.763 381.304ZM213.173 350.124C228.275 350.124 241.97 356.257 251.864 366.151C261.774 376.045 267.891 389.737 267.891 404.858C267.891 419.96 261.758 433.655 251.864 443.549C241.97 453.459 228.278 459.576 213.173 459.576C198.052 459.576 184.376 453.443 174.466 443.549C164.572 433.654 158.439 419.963 158.439 404.858C158.439 389.737 164.572 376.061 174.466 366.151C184.361 356.256 198.052 350.124 213.173 350.124ZM236.728 381.304C230.697 375.273 222.38 371.542 213.173 371.542C203.966 371.542 195.65 375.273 189.618 381.304C183.586 387.335 179.856 395.652 179.856 404.859C179.856 414.05 183.587 422.382 189.618 428.414C195.649 434.446 203.966 438.176 213.173 438.176C222.364 438.176 230.696 434.445 236.728 428.414C242.76 422.383 246.49 414.066 246.49 404.859C246.49 395.652 242.759 387.336 236.728 381.304ZM92.098 98.994L78.793 31.877H10.719C4.8049 31.877 0 27.0879 0 21.174C0 15.2601 4.8047 10.455 10.719 10.455H87.578C92.6014 10.455 97.0858 13.998 98.078 19.1073L111.469 86.7123H468.189C475.9 86.7123 483.173 88.3256 489.794 91.4506C496.364 94.56 502.208 99.1615 507.149 105.158C512.087 111.173 515.481 117.81 517.247 124.849C519.028 131.923 519.181 139.349 517.684 146.923L491.392 279.643C489.04 291.538 482.739 301.702 473.97 308.893C465.184 316.1 453.993 320.319 441.915 320.319H177.395C165.297 320.319 154.125 316.1 145.34 308.893C136.57 301.686 130.269 291.538 127.917 279.643L92.3195 100.013C92.2336 99.6766 92.1672 99.3251 92.1164 98.9696L92.098 98.994Z" fill="#444444"/>
                                <path d="M514.814 4.45046C519.695 -0.431089 527.61 -0.431075 532.491 4.45048C537.373 9.33203 537.373 17.2466 532.491 22.1281L74.9602 479.659C70.0787 484.541 62.1641 484.541 57.2826 479.659C52.401 474.778 52.401 466.863 57.2826 461.982L514.814 4.45046Z" fill="#444444"/>
                            </svg>
                            <div className={"ml-20 TextSI"}>
                                To see your cart, <br></br>
                                don't hesitate <br></br>
                                to add items !
                            </div>
                        </div>
                        <Footer/>
                    </div>
            }
            <Footer/>
        </div>
    );
}
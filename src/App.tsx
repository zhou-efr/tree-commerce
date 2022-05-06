import React, {createContext, FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Contact} from "./Pages/Contact";
import {Login, Profile} from "./Pages/User";
import {Tree, Trees} from "./Pages/Trees";
import {NotFound} from "./Pages/Miscellaneous";
import {ToolBar} from "./Component/ToolBar/ToolBar";
import { Cart, Checkout } from "./Pages/Shop";
import { API_URL } from "./Constants/Constants";
import {ShoppingPage} from "./Pages/ShoppingPage";
import {HomeShopping} from "./Pages/HomeShopping";
import {AboutUs} from "./Pages/About Us";

interface OrderType {
    payer_id: string;
    order_id: string,
    payment_id: string,
    payment_status: string,
    payer_address: {
        address_line_1: string,
        admin_area_2: string,
        postal_code: string,
        country_code: string
    },
    payer_email: string,
    basket: TreeType[],
    amount: number
}


interface UserType {
    basket: TreeType[] | null;
    orders: OrderType[] | null;
    username: string,
    password: string,
    email: string,
    profilePicture: string,
}
interface userContextType {
    user: UserType | null;
}

interface TreeType {
    TaxonName: string;
    Author: string;
    continent: string;
    color: string;
    picture: string;
    picture_author: string;
    picture_author_link: string;
    picture_link: string;
    season: string;
    life_expectancy: string;
    collection_name: string;
    price: number;
    description: string;
}
interface treeContextType {
    trees: TreeType[] | null;
}
const defaultTreeContext: treeContextType = {
    trees: null
};

interface basketContextType {
    basket: TreeType[] | null;
    setBasket: (basket: TreeType[], user: UserType | null | undefined) => void;
    addToCart: (tree: TreeType, basket: TreeType[] | null, user: UserType | null | undefined) => void;
    removeFromCart: (index: number, basket: TreeType[] | null, user: UserType | null | undefined) => void;
}

const UserContext = createContext<userContextType | null>(null);
const ProductContext = createContext(defaultTreeContext);
const BasketContext = createContext<basketContextType | null>(null);
interface loadingProps {
    className?: string;
}
const Loading:FC<loadingProps> = ({className}) =>
    <div className={"w-full h-96 flex justify-center items-center ".concat(className ? className : "")}>
        <svg className={"animate-spin"} width="100" viewBox="0 0 561 561" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M280.209 0C434.959 0 560.419 125.46 560.419 280.21C560.419 325.718 549.567 368.687 530.31 406.69L492.509 384.862C508.091 353.319 516.845 317.792 516.845 280.212C516.845 149.512 410.915 43.582 280.215 43.582C149.505 43.582 43.575 149.512 43.575 280.212C43.575 355.778 79.341 426.152 139.95 470.822V522.842C53.473 472.737 0 380.662 0 280.212C0 125.462 125.46 0.002 280.22 0.002L280.209 0ZM514.759 433.56C507.017 445.384 498.407 456.583 489.005 467.08L458.15 436.217C464.927 428.494 471.216 420.311 476.959 411.74L514.759 433.56ZM467.06 489.033C456.572 498.424 445.372 507.037 433.548 514.779L411.72 476.978C420.298 471.236 428.47 464.947 436.204 458.169L467.06 489.033ZM406.677 530.326C394.173 536.658 381.122 542.092 367.622 546.521L356.329 504.349C366.145 501.021 375.669 497.056 384.852 492.517L406.672 530.326H406.677ZM337.638 554.537C324.005 557.373 310.009 559.224 295.724 560.006V516.365C306.126 515.685 316.341 514.341 326.337 512.365L337.638 554.537Z" fill="url(#paint0_angular_585_240)"/>
            <defs>
                <radialGradient id="paint0_angular_585_240" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280.209 280.003) rotate(90.0429) scale(279.997 280.204)">
                    <stop/>
                    <stop offset="1" stopColor="#A8A8A8"/>
                </radialGradient>
            </defs>
        </svg>
    </div>;

const App:FC = () => {
    const [contextUser, setContextUser] = React.useState<userContextType>({
        user: null
    });
    const [trees, setTrees] = React.useState(defaultTreeContext);
    const [treesLoaded, setTreesLoaded] = React.useState(false);
    const [contextBasket, setContextBasket] = React.useState<basketContextType>({
        basket: [],
        setBasket: async (basket: TreeType[], currentUser: UserType | null | undefined) => {
            // console.log("setBasket");
            // console.log(basket);
            // console.log(contextUser);
            if (currentUser) {
                await fetch(`${API_URL}/user/basket/${currentUser.username}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(basket)
                }).catch(err => {
                    throw err;
                });
                const basketResponse = await fetch(`${API_URL}/user/basket/${currentUser.username}`).catch(err => {
                    throw err;
                });
                const basketResponseJson = await basketResponse.json();
                setContextUser({
                    user: {
                        ...currentUser,
                        basket: basketResponseJson
                    }
                });
                localStorage.setItem('user', JSON.stringify({
                    ...currentUser,
                    basket: basketResponseJson
                }));
                setContextBasket({
                    basket: basketResponseJson,
                    setBasket: contextBasket.setBasket,
                    addToCart: contextBasket.addToCart,
                    removeFromCart: contextBasket.removeFromCart
                });
            } else {
                setContextBasket({
                    basket: basket,
                    setBasket: contextBasket.setBasket,
                    addToCart: contextBasket.addToCart,
                    removeFromCart: contextBasket.removeFromCart
                });
            }
        },
        addToCart: async (tree, basket: TreeType[] | null, currentUser) => {
            // console.log("addToCart");
            // console.log(tree);
            // console.log(basket);
            let newBasket = [tree];
            if (basket) {
                newBasket = [...basket, tree];
            }
            alert(`${tree.TaxonName} added to basket`);
            // console.log(newBasket);
            // console.log("end add to cart");
            contextBasket.setBasket(newBasket, currentUser);
        },
        removeFromCart: async (index, basket: TreeType[] | null, currentUser) => {
            if (basket) {
                if (index >= 0 && index < basket.length) {
                    let newBasket = [...basket];
                    newBasket.splice(index, 1);
                    alert(`${basket[index].TaxonName} removed from basket`);
                    contextBasket.setBasket(newBasket, currentUser);
                } else {
                    alert("Invalid index");
                }
            }else {
                alert("No basket to remove from");
            }
        }
    });

    useEffect( () => {
        const fetchData = async () => {
            const tempTrees = await fetch(`${API_URL}/trees`);
            // console.log(tempTrees);
            const tempTreesJson = await tempTrees.json();
            // console.log(tempTreesJson);
            for (let i = 0; i < tempTreesJson.length; i++){
                // tempTreesJson[i].picture = `https://picsum.photos/400`;
                tempTreesJson[i].description = 'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
                // tempTreesJson[i].price = Math.floor(Math.random() * (10000)) + 99 + Math.round(Math.random()*100)/100;
            }
            setTreesLoaded(true);
            setTrees({trees: tempTreesJson});
        };

        fetchData().catch(err => console.log(err));
    }, []);

    const onLogin = (loggedUser: any, alrt = true) => {
        if (loggedUser) {
            // console.log("logged user in");
            // console.log(loggedUser);
            setContextUser({user: loggedUser});
            localStorage.setItem('user', JSON.stringify(loggedUser));
            // console.log("contextUser");
            // console.log(contextUser);
            if (alrt) {
                alert("Logged in");
            }
            if (loggedUser?.basket && loggedUser?.basket.length > 0) {
                contextBasket.setBasket(loggedUser.basket, loggedUser);
            }
        }
    };
    const onLogout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => {
            console.log(response);

        }).catch(error => {
            console.log(error);
        });
        setContextUser({user: null});
        localStorage.removeItem('user');
        alert("Logged out");
        contextBasket.setBasket([], null);
    };
    
    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user') as string);
            onLogin(user, false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <UserContext.Provider value={contextUser}>
            <ProductContext.Provider value={trees}>
                <BasketContext.Provider value={contextBasket}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login onLogin={user => onLogin(user)}/>} />
                        <Route path="/" element={<ToolBar  onLogout={() => onLogout()}/>}>
                            {
                                treesLoaded ? (
                                    <>
                                        <Route path="shopping" element={<HomeShopping/>}/>
                                        <Route path="about-us" element={<AboutUs/>}/>
                                        <Route path="shopping-page" element={<ShoppingPage/>}/>
                                        <Route path="contact" element={<Contact/>}/>
                                        {/*<Route path="register" element={<Register  onLogin={user => onLogin(user)}/>} />*/}
                                        <Route path="profile" element={<Profile />} />
                                        <Route path="my-cart" element={<Cart />} />
                                        <Route path="checkout" element={<Checkout />} />
                                        <Route path={"Trees"}>
                                            <Route index element={<Trees />}/>
                                            <Route path=":TaxonName" element={<Tree />} />
                                        </Route>
                                        <Route path="*" element={<NotFound />} />
                                    </>
                                ):(
                                    <>
                                        <Route path="*" element={<Loading />} />
                                    </>
                                )
                            }
                        </Route>
                    </Routes>
                </BasketContext.Provider>
            </ProductContext.Provider>
        </UserContext.Provider>
    );
};

export default App;
export {UserContext};
export {ProductContext};
export {BasketContext};

export type {TreeType};

export {Loading};

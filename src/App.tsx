import React, {FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {API_URL} from "./Constants/Constants";
import {Home} from "./Pages/Home";
import {Login, Profile} from "./Pages/User";
import {Loading, ToolBar} from "./Component";
import {Cart, Checkout, HomeShopping, ShoppingPage} from "./Pages/Shop";
import {basketContextType, defaultTreeContext, TreeType, userContextType, UserType} from "./Constants/Types";
import {BasketContext, ProductContext, UserContext } from "./Constants/Contexts";
import { AboutUs } from "./Pages/About Us";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";

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
                                        {/*<Route path={"Trees"}>*/}
                                        {/*    <Route index element={<Trees />}/>*/}
                                        {/*    <Route path=":TaxonName" element={<Tree />} />*/}
                                        {/*</Route>*/}
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

import React, {createContext, FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Login, Profile, Register} from "./Pages/User";
import {Tree, Trees} from "./Pages/Trees";
import {NotFound} from "./Pages/Miscellaneous";
import {ToolBar} from "./Component/ToolBar/ToolBar";

interface UserType {
    username: string;
    email: string;
    password: string;
}

interface contextType {
    user: UserType | null;
}

const defaultContext: contextType = {
    user: null
};

const UserContext = createContext(defaultContext);

const App:FC = () => {
    const [user, setUser] = React.useState(defaultContext);
    
    const onLogin = (user: any) => {
        if (user) {
            setUser({user});
        } else {
            setUser({user: null});
        }
    };
    
    const onLogout = () => {
        setUser({user: null});
    };
    
    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ToolBar  onLogout={() => onLogout()}/>}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login  onLogin={user => onLogin(user)}/>} />
                        <Route path="register" element={<Register  onLogin={user => onLogin(user)}/>} />
                        <Route path="profile" element={<Profile />} />
                        <Route path={"Trees"}>
                            <Route index element={<Trees trees={[
                                {
                                    id: 0,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 1,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 2,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 3,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 4,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 5,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 6,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 7,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 8,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 9,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 10,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 11,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                                {
                                    id: 12,
                                    name:"panda",
                                    description:"panda",
                                    category:"panda",
                                    image:"panda",
                                    price:12.1
                                },
                            ]} />}/>
                            <Route path=":id" element={<Tree  tree={{
                                id: 0,
                                name:"panda",
                                description:"panda",
                                category:"panda",
                                image:"panda",
                                price:12.1
                            }}/>} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
};

export default App;
export {UserContext};

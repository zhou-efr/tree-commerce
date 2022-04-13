import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import {Login, Profile} from "./Pages/User";
import {NotFound} from "./Pages/Miscellaneous";
import {Tree, Trees} from "./Pages/Trees";
import { Home } from './Pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login  handleChange={e => console.log(e)} handleSubmit={e => console.log(e)}/>} />
                <Route path="profile" element={<Profile  user={{name: "panda", email: "panda@panda.panda"}}/>} />
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
  </React.StrictMode>,
  document.getElementById('root')
);

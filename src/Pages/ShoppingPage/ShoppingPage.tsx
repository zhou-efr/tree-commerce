import {FC, useState} from "react";
import {Item} from "./Item/Item";
// @ts-ignore
import pinktree from "./pinkTree.png";
// @ts-ignore
import palmier from "./palmier.png";
// @ts-ignore
import noLeaf from "./noLeaf.png";
// @ts-ignore
import oldtree from "./oldtree.png";
import {Footer} from "../../Component";
import "./ShoppingPage.scss";


export const ShoppingPage:FC = () => {
    return (
    <div className={"ShoppingPage w-screen"}>
        <div className={"flex w-fill -mt-px overflow-x-hidden grid-cols-4"}>
            <Item picture={pinktree} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={palmier} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={oldtree} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={noLeaf} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={pinktree} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={palmier} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={oldtree} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
            <Item picture={noLeaf} nameTree={"TreeName"} lifeExpect={"15 years"} price={"99.99€"} season={"Autumn" }/>
        </div>
        <Footer/>
    </div>
    )

}
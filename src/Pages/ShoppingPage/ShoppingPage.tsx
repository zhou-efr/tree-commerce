import {FC, useContext, useEffect, useState,} from "react";
import {Item} from "./Item/Item";
import {Footer} from "../../Component";
import "./ShoppingPage.scss";
import {ProductContext, TreeType} from "../../App";
import {useSearchParams} from "react-router-dom";



export const ShoppingPage:FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    const filter = searchParams.get('filter');
    const filterParameter = searchParams.get('value');
    const above = searchParams.get('above');
    const below = searchParams.get('below');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const trees = useContext(ProductContext).trees || [];
    const [filteredTrees, setFilteredTrees] = useState<TreeType[]>(trees || []);

    useEffect(() => {
        document.title = "Shopping Page";
    }, []);

    useEffect(() => {
        console.log(filter, filterParameter, above, below);
        switch (filter) {
            case "Continent":
                setFilteredTrees(trees.filter(tree => tree.continent.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            case "Season":
                setFilteredTrees(trees.filter(tree => tree.season.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            case "Life Expectancy":
                setFilteredTrees(trees.filter(tree => tree.life_expectancy.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            case "Price":
                setFilteredTrees(trees.filter(tree => tree.price >= Number(above) && tree.price <= Number(below)));
                break;
            case "Color":
                setFilteredTrees(trees.filter(tree => tree.color.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            case "Collection":
                setFilteredTrees(trees.filter(tree => tree.collection_name.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            default:
                setFilteredTrees(trees);
                break;
        }
    }, [filter, trees, filterParameter, above, below]);

    return (
    <div className={`ShoppingPage relative w-screen h-fit overflow-x-hidden`}>
        <div className={"z-10 absolute top-0 right-32 w-1/3 h-16 border-x-2 border-b-2 border-black bg-white flex justify-center font-light tracking-wider items-center uppercase text-3xl "}>{filterParameter || filter}</div>
        <div className={`z-0 h-fit flex w-full -mt-px overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
            {filteredTrees?.map((tree, index) =>
                <Item key={index} tree={tree}/>
            )}
        </div>
        <Footer/>
    </div>
    )

}
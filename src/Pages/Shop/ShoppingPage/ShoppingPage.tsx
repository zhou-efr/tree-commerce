import {FC, useContext, useEffect, useState,} from "react";
import {Item} from "../../../Component";
import {Footer} from "../../../Component";
import "./ShoppingPage.scss";
import {ProductContext, TreeType} from "../../../App";
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
                if (filterParameter?.toLowerCase().includes("all")) {
                    setFilteredTrees(trees);
                }
                setFilteredTrees(trees.filter(tree => tree.season.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            case "Life Expectancy":
                setFilteredTrees(trees.filter(tree => tree.life_expectancy.toLowerCase() === filterParameter?.toLowerCase()));
                break;
            case "Price":
                // ['All price', 'Collection', 'For everyone']
                if (filterParameter?.toLowerCase().includes("all")) {
                    setFilteredTrees(trees);
                }
                if (filterParameter?.toLowerCase().includes("collection")) {
                    setFilteredTrees(trees.filter(tree => tree.price >= 1000));
                }
                if (filterParameter?.toLowerCase().includes("for everyone")) {
                    setFilteredTrees(trees.filter(tree => tree.price < 1000));
                }
                // setFilteredTrees(trees.filter(tree => tree.price >= Number(above) && tree.price <= Number(below)));
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
        <div className={"z-10 absolute top-0 right-0 lg:right-32 w-2/3 lg:w-1/3 h-16 border-x-2 border-b-2 border-black bg-white flex justify-center font-light tracking-wider items-center uppercase text-3xl "}>{filterParameter || filter}</div>
        <div className={`z-0 mt-16 border-black border-b-2 lg:border-b-0 pt-2 h-fit w-full lg:-mt-px overflow-x-hidden grid grid-cols-1 lg:grid-cols-4`}>
            {filteredTrees?.map((tree, index) =>
                <Item key={index} tree={tree}/>
            )}
        </div>
        <Footer/>
    </div>
    )

}
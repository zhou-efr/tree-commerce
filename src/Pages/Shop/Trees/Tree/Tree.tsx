import {FC, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {BasketContext, ProductContext, UserContext} from "../../../../App";

// interface TreeItemProps {
//     tree: TreeType;
// }

export const Tree:FC = () => {
    const {TaxonName} = useParams();
    const tree = useContext(ProductContext).trees?.find(tree => tree.TaxonName === TaxonName) || null;
    const basketContext = useContext(BasketContext) ;
    const userContext = useContext(UserContext) ;

    console.log(tree)
    return (
        <div key={TaxonName} className={"m-1"}>
            {
                tree &&
                <Link to={`/trees/${tree.TaxonName}`}>
                    <div className={"card"}>
                        <div className={"card-body"}>
                            <h5 className={"card-title"}>
                                {tree.TaxonName}-{tree.price}S$
                                <button
                                    className={"inline-block ml-2 text-red-600"}
                                    onClick={() => basketContext?.addToCart(tree, basketContext?.basket, userContext?.user)}>
                                    add to card
                                </button>
                            </h5>
                            <p className={"card-text"}>{tree.Author}</p>
                            <p>{tree.description}</p>
                        </div>
                    </div>
                </Link>
            }
        </div>
    )
}
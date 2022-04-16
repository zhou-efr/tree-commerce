import {FC, useContext} from "react";
import {Link} from "react-router-dom";
import {ProductContext} from "../../../App";

// interface TreesListProps {
//     trees: TreeType[];
// }

export const Trees:FC = () => {
    const context = useContext(ProductContext);

    return (
        <div>
            {context.trees && context.trees.map((tree, index) => {
                return (
                    <div key={index} className={"m-1"}>
                        <Link to={`/trees/${tree.TaxonName}`}><h3 className={"italic underline"}>{tree.TaxonName}</h3></Link>
                        <p><em>description :</em>{tree.Author}</p>
                    </div>
                )
            })}
        </div>
    )
}
import {FC} from "react";
import {TreeType} from "../index";
import {Link} from "react-router-dom";

interface TreesListProps {
    trees: TreeType[];
}

export const Trees:FC<TreesListProps> = (props) => {
    return (
        <div>
            {props.trees.map((tree) => {
                return (
                    <div key={tree.id} className={"m-1"}>
                        <Link to={`/trees/${tree.id}`}><h3 className={"italic underline"}>{tree.name}</h3></Link>
                        <p><em>description :</em>{tree.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
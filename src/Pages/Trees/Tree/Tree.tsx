import {FC} from "react";
import {TreeType} from "../index";
import {Link, useParams} from "react-router-dom";

interface TreeItemProps {
    tree: TreeType;
}

export const Tree:FC<TreeItemProps> = (props) => {
    const {tree} = props;
    const {id} = useParams();

    return (
        <div key={id} className={"m-1"}>
            <Link to={`?id=${tree.id}`}><h3 className={"italic underline"}>{tree.name}</h3></Link>
            <p><em>description :</em> {tree.description}</p>
        </div>
    )
}
import {FC} from "react";
import {TreeType} from "../../../../App";


interface ListItemProps {
    tree: TreeType;
    key?: number;
}

export const ListItem:FC<ListItemProps> = ({tree, key}) => {
    return (
        <div className={"h-1/4 border-black border-b-2"} key={key}>
            <div className={"flex h-full mx-4 flex-row justify-between items-center"}>
                <p className={"ml-5 uppercase tracking-wider"}>{tree.TaxonName}</p>
                <p className={" mr-20 mt-2 font-dreaming text-5xl"}>S${(tree.price/100).toFixed(2)}</p>
            </div>
        </div>
    )

}
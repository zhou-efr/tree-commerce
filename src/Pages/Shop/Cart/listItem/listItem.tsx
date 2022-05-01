import {FC, useContext} from "react";


interface ListItemProps {
    nameTree?:string;
    price?:string;
}

export const ListItem:FC<ListItemProps> = ({nameTree,price}) => {
    return (
        <div className={"h-1/4 border-black border-b-2"}>
            <div className={"flex h-full mx-4 flex-row justify-between items-center"}>
                <p className={"ml-5 uppercase tracking-wider"}>{nameTree}</p>
                <p className={" mr-20 mt-2 font-dreaming text-5xl"}>{price}</p>
            </div>
        </div>
    )

}
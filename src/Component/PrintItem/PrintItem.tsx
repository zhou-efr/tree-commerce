import {FC} from "react";
import {TreeType} from "../../App";

interface PrintItemProps {
    tree: TreeType | null;
    key: number;
    remove: () => void;
}

export const PrintItem:FC<PrintItemProps> = ({tree, key, remove}) => {
    return (
        <div key={key} className={"-mb-px ml-48 p-5 border-b-2 border-x-2 border-black w-3/5 h-96 "}>
            <div className={"flex h-full flex-row justify-between"}>
                <div className={"flex h-full flex-col justify-start w-1/2"}>
                    <img className={"h-full object-cover aspect-[41/57] opacity-90 object-bottom"} src={tree?.picture} alt={tree?.picture_author}/>
                </div>
                <div className={"mt-3 ml-7 mr-5 flex flex-col justify-start tracking-wider w-1/2"}>
                    <div className={"mb-3 flex justify center uppercase text-sm underline underline-offset-4 decoration-underline-red"}>
                        {tree?.TaxonName}
                    </div>
                    <div className={"mb-3 text-xs text-justify"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui.
                    </div>
                    <div className={"mb-3 text-xs tracking-wider"}><span className={"uppercase text-underline-red"}>Season : </span>{tree?.season}</div>
                    <div className={"mb-3 text-xs tracking-wider"}><span className={"uppercase text-underline-red"}>Life Expectancy : </span>{tree?.life_expectancy}</div>
                    <div className={"mt-3 flex justify-center items-center"}><div className={"font-dreaming text-5xl"}>S${((tree? tree.price : 0)/100).toFixed(2)}</div>
                    </div>
                    <div className={"flex justify-end items-center"}>
                        <button onClick={() => remove()} className={"mt-4 -mr-2 tracking-widest text-underline-red navbar-link after:bg-underline-red py-2 px-9 focus:outline-none"}>Remove</button>
                    </div>

                </div>

            </div>

        </div>
    )

}
import {FC, useContext} from "react";

interface PrintItemProps {
    nameTree?:string;
    urlImage?:string;
    description?:string;
    season?:string;
    lifeExpectancy?:string;
    price?:string;
}

export const PrintItem:FC<PrintItemProps> = ({nameTree,urlImage,description,season,lifeExpectancy,price}) => {
    return (
        <div className={"-mb-px ml-48 p-5 border-b-2 border-x-2 border-black w-3/5 h-96 "}>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col justify-start w-1/2"}>
                    <img className={"h-fit object-cover opacity-90"} src={urlImage}/>
                </div>
                <div className={"mt-3 ml-7 mr-5 flex flex-col justify-start tracking-wider w-1/2"}>
                    <div className={"mb-3 flex justify center uppercase text-sm underline underline-offset-4 decoration-underline-red"}>
                        {nameTree}
                    </div>
                    <div className={"mb-3 text-xs text-justify"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui.
                    </div>
                    <div className={"mb-3 text-xs tracking-wider"}><span className={"uppercase text-underline-red"}>Season : </span>{season}</div>
                    <div className={"mb-3 text-xs tracking-wider"}><span className={"uppercase text-underline-red"}>Life Expectancy : </span>{lifeExpectancy}</div>
                    <div className={"mt-3 flex justify-center items-center"}>
                        <div className={"font-dreaming text-5xl"}>{price}</div>
                    </div>
                    <div className={"flex justify-end items-center"}>
                        <div className={"mt-4 -mr-2 tracking-widest text-underline-red navbar-link after:bg-underline-red py-2 px-9 focus:outline-none"}>Remove</div>
                    </div>

                </div>

            </div>

        </div>
    )

}
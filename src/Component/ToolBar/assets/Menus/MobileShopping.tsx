import {FC} from "react";
// @ts-ignore
import img4 from "../img/img4.png";
import {Link} from "react-router-dom";

const continent = ['Africa', 'Asia', 'Oceania', 'Europe', 'North America', 'South America', 'Ocean'];
const color = ['Green', 'Yellow', 'Red', 'Orange', 'Purple', 'Brown', 'Black'];
const season = ['All season', 'Spring', 'Summer', 'Autumn', 'Winter'];
const lifeExpectancy = ['Short', 'Medium', 'Long'];
const collection = ['', 'Kenya', 'Tea Party', 'Post-Apocalypse', 'Summer by the sea', 'Cozy winter'];
const column1 = [
    {
        title: 'Continent',
        data: continent
    },
    {
        title: 'Color',
        data: color
    },
];
const column2 = [
    {
        title: 'Season',
        data: season
    },
    {
        title: 'Life Expectancy',
        data: lifeExpectancy
    },
    {
        title: 'Price',
        data: ['All price', 'Collection', 'For everyone']
    },
];
const column3 = [
    {
        title: 'Color',
        data: color
    },
    {
        title: 'Collection',
        data: collection
    },
];

interface MobileShoppingProps {
    handleLinkClick: () => void;
}

export const MobileShopping:FC<MobileShoppingProps> = ({handleLinkClick}) => {
    return (
        <div className={"w-full flex flex-col"}>
            <div className={"border-b-2 border-black grid grid-cols-3 py-3 text-sm px-4"}>
                <div className={"row-span-1 flex flex-col"}>
                    {
                        column1.map((item, index) => {
                            return (
                                <div key={index} className={"pl-3 py-3 flex flex-col"}>
                                    <p className={"font-medium"}>{item.title}</p>
                                    {
                                        item.data.map((item2, index) => {
                                            const url = '/shopping-page?filter='.concat(item.title).concat('&value=').concat(item2);
                                            return (
                                                <Link
                                                    key={index}
                                                    className={"navbar-link after:bg-black font-light"}
                                                    to={url}
                                                    onClick={handleLinkClick}
                                                >
                                                    {item2}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"row-span-2 flex flex-col"}>
                    {
                        column2.map((item, index) => {
                            return (
                                <div key={index} className={"pl-3 py-3 flex flex-col"}>
                                    <p className={"font-medium"}>{item.title}</p>
                                    {
                                        item.data.map((item2, index) => {
                                            const url = '/shopping-page?filter='.concat(item.title).concat('&value=').concat(item2);
                                            return (
                                                <Link
                                                    key={index}
                                                    className={"navbar-link after:bg-black font-light"}
                                                    to={url}
                                                    onClick={handleLinkClick}
                                                >
                                                    {item2}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"row-span-2 flex flex-col"}>
                    {
                        column3.map((item, index) => {
                            return (
                                <div key={index} className={"pl-3 py-3 flex flex-col"}>
                                    <p className={"font-medium"}>{item.title}</p>
                                    {
                                        item.data.map((item2, index) => {
                                            const url = '/shopping-page?filter='.concat(item.title).concat('&value=').concat(item2);
                                            return (
                                                <Link
                                                    key={index}
                                                    className={"navbar-link after:bg-black font-light"}
                                                    to={url}
                                                    onClick={handleLinkClick}
                                                >
                                                    {item2}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <div className={"pl-3 py-3  flex flex-col"}>
                        <Link
                            className={"font-medium text-underline-red navbar-link after:bg-underline-red"}
                            to={"/shopping-page?filter=promotions"}
                            onClick={handleLinkClick}
                        >
                            Promotions
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col pl-3 py-3 -mt-2"}>
                <Link
                    className={"mb-2 navbar-link after:bg-black text-normal font-medium mb-1 "}
                    to={"/shopping-page?filter=Collection&value=Kenya"}
                    onClick={handleLinkClick}
                >
                    Special collection : Trees of Kenya
                </Link>
                <img className={"w-2/3"} src={img4} alt={"tree"}/>
            </div>
        </div>
    );
}
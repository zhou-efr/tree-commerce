import {FC} from "react";
// @ts-ignore
import img1 from "../img/img2.png";
// @ts-ignore
import img2 from "../img/img1.png";
// @ts-ignore
import img3 from "../img/img3.png";


interface DefaultProps {
    entered: boolean;
    animatEnd: boolean;
    onHoverEnd: () => void;
    onHoverStart: () => void;
}

export const Default:FC<DefaultProps> = ({entered, animatEnd, onHoverEnd, onHoverStart}) => {
    return (
        <div
            className={"flex justify-center items-center w-4/5 p-3 ".concat(entered?"fadeIn":"fadeOut").concat(animatEnd ? " hidden": "")}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
        >
            <svg width="862" height="379" viewBox="0 0 862 379" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="239" y="12" width="306" height="367" fill="white"/>
                <rect x="239" y="12" width="306" height="367" fill="url(#pattern0)"/>
                <rect width="346" height="265" fill="#C4C4C4"/>
                <rect width="346" height="265" fill="url(#pattern1)"/>
                <rect x="507" y="126" width="355" height="244" fill="#C4C4C4"/>
                <rect x="507" y="126" width="355" height="244" fill="url(#pattern2)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_0_1" transform="translate(0 -0.125341) scale(0.00304878 0.00254203)"/>
                    </pattern>
                    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image1_0_1" transform="translate(0 -0.02251) scale(0.00188324 0.00245887)"/>
                    </pattern>
                    <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image2_0_1" transform="translate(-0.0160217) scale(0.00211484 0.00307692)"/>
                    </pattern>
                    <image id="image0_0_1" width="328" height="492" xlinkHref={img1}/>
                    <image id="image1_0_1" width="531" height="425" xlinkHref={img2}/>
                    <image id="image2_0_1" width="488" height="325" xlinkHref={img3}/>
                </defs>
            </svg>
        </div>
    );
}
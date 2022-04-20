import {FC, useState} from "react";
// @ts-ignore
import greenTree from "./greenTree.png";
// @ts-ignore
import logo from "./logo.png";
// @ts-ignore
import redTree from "./redTree.png";
// @ts-ignore
import pinkTree from "./pinkTree.png";
// @ts-ignore
import pinkLeaf from "./pinkLeaf.png";
import "./home.scss";
import {AnimatedLink} from "../../Component";

export const Home:FC = () => {
    let [flashClass, setFlashClass] = useState("");
    let [img1, setImg1] = useState(greenTree);
    let [img2, setImg2] = useState(redTree);
    let [img3, setImg3] = useState(pinkTree);
    let [img4, setImg4] = useState(pinkLeaf);

    const hoverNav = async (response: any) => {
        setFlashClass("  brightness-500 ");
        await new Promise(r => setTimeout(r, 150));

        switch (response) {
            case '1':
                setImg1(greenTree);
                setImg2(greenTree);
                setImg3(greenTree);
                setImg4(greenTree);
                break;
            case '2':
                setImg1(redTree);
                setImg2(redTree);
                setImg3(redTree);
                setImg4(redTree);
                break;
            case '3':
                setImg1(pinkTree);
                setImg2(pinkTree);
                setImg3(pinkTree);
                setImg4(pinkTree);
                break;
            case '4':
                setImg1(pinkLeaf);
                setImg2(pinkLeaf);
                setImg3(pinkLeaf);
                setImg4(pinkLeaf);
                break;
            default :
                setImg1(greenTree);
                setImg2(redTree);
                setImg3(pinkTree);
                setImg4(pinkLeaf);

        }
        setFlashClass("brightness-1");

    }

    const flash = () => {
      greenTree.classList.add('flash');
    }
    return (
        <div className={"relative overflow-hidden h-screen"}>
            <div className={"tagName"}>THE WEBSITE THAT ALLIES TREES AND FASHION</div>
            <img className={"logo"} src={logo}/>

            <div className={"navBarHome"}>
                <AnimatedLink
                    to={"/panda"}
                    hoverTextColor={"text-white"}
                    hoverColor={"bg-black"}
                    onHover={() => hoverNav("1")}
                    onHoverQuit={() => hoverNav("0")}
                >
                    SHOPPING
                </AnimatedLink>
                <AnimatedLink to={"/panda"} hoverTextColor={"text-white"}
                              hoverColor={"bg-black"}
                              onHover={() => hoverNav("2")}
                              onHoverQuit={() => hoverNav("0")}
                >
                    COLLECTION
                </AnimatedLink>
                <AnimatedLink
                    to={"/panda"}
                    hoverTextColor={"text-white"}
                    hoverColor={"bg-black"}
                    onHover={() => hoverNav("3")}
                    onHoverQuit={() => hoverNav("0")}
                >
                    COLOR
                </AnimatedLink>
                <AnimatedLink
                    to={"/SignIn"}
                    hoverTextColor={"text-white"}
                    hoverColor={"bg-black"}
                    onHover={() => hoverNav("4")}
                    onHoverQuit={() => hoverNav("0")}
                >
                    PROMOTION
                </AnimatedLink>
            </div>
            <svg className={"greenTree ".concat(flashClass)} width="392" height="439" viewBox="0 0 392 439" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_79_129)">
                    <rect x="63.0752" y="16.5369" width="310" height="425" transform="rotate(5.75134 63.0752 16.5369)"
                          fill="white"/>
                </g>
                <rect x="73.0176" y="27.5889" width="287" height="345" transform="rotate(5.75134 73.0176 27.5889)"
                      fill="#C4C4C4"/>
                <rect x="73.0176" y="27.5889" width="287" height="345" transform="rotate(5.75134 73.0176 27.5889)"
                      fill="url(#pattern0)"/>
                <defs>
                    <filter id="filter0_d_79_129" x="0.485352" y="0.536926" width="391.029" height="493.926"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_79_129"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_79_129" result="shape"/>
                    </filter>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_79_129"
                             transform="translate(0 -0.124168) scale(0.00122399 0.00101822)"/>
                    </pattern>
                    <image id="image0_79_129" width="817" height="1226" xlinkHref={img1}/>
                </defs>
            </svg>
            <svg className={"redTree ".concat(flashClass)} width="322" height="372" viewBox="0 0 322 372" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_0_1)">
                    <rect x="20.2168" y="27.4366" width="266.112" height="364.831" transform="rotate(-2.46315 20.2168 27.4366)" fill="white"/>
                </g>
                <rect x="30.0195" y="35.6072" width="246.368" height="296.157" transform="rotate(-2.46315 30.0195 35.6072)" fill="white"/>
                <rect x="30.0195" y="35.6072" width="246.368" height="296.157" transform="rotate(-2.46315 30.0195 35.6072)" fill="url(#pattern1)"/>
                <defs>
                    <filter id="filter0_d_0_1" x="0.216797" y="0" width="321.545" height="415.93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_0_1" transform="translate(0 -0.123913) scale(0.00217391 0.00180844)"/>
                    </pattern>
                    <image id="image0_0_1" width="460" height="690" xlinkHref={img2}/>
                </defs>
            </svg>
            <svg className={"pinkTree ".concat(flashClass)} width="265" height="287" viewBox="0 0 265 287" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_0_1)">
                    <rect x="20.9785" y="18.267" width="221.302" height="303.398" transform="rotate(-0.515164 20.9785 18.267)" fill="white"/>
                </g>
                <rect x="28.8955" y="25.335" width="204.883" height="246.288" transform="rotate(-0.515164 28.8955 25.335)" fill="white"/>
                <rect x="28.8955" y="25.335" width="204.883" height="246.288" transform="rotate(-0.515164 28.8955 25.335)" fill="url(#pattern3)"/>
                <defs>
                    <filter id="filter0_d_0_1" x="0.978516" y="0.277222" width="264.021" height="345.376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_0_3" transform="translate(0 -0.123913) scale(0.00217391 0.00180844)"/>
                    </pattern>
                    <image id="image0_0_3" width="460" height="690" xlinkHref={img3}/>
                </defs>
            </svg>
            <svg className={"pinkLeaf ".concat(flashClass)} width="545" height="616" viewBox="0 0 545 616" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_0_1)">
                    <rect x="304.72" y="16" width="339.477" height="465.412" transform="rotate(37.7168 304.72 16)" fill="white"/>
                </g>
                <rect x="307.55" y="32.0319" width="314.29" height="377.805" transform="rotate(37.7168 307.55 32.0319)" fill="white"/>
                <rect x="307.55" y="32.0319" width="314.29" height="377.805" transform="rotate(37.7168 307.55 32.0319)" fill="url(#pattern4)"/>
                <defs>
                    <filter id="filter0_d_0_1" x="0" y="0" width="593.261" height="615.839" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_0_4" transform="translate(-0.46223) scale(0.00278907 0.00232019)"/>
                    </pattern>
                    <image id="image0_0_4" width="690" height="431" xlinkHref={img4}/>
                </defs>
            </svg>


            <div className={"streakOne streak2 absolute bg-none"}/>
            <div className={"streakTwo streak2 absolute bg-none"}/>
        </div>
    );
}
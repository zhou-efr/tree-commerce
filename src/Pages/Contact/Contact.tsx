import {FC} from "react";
import "./Contact.scss";
import {Footer} from "../../Component";
import {ImageNetwork} from "../../Component";
// @ts-ignore
import treeLinkedin from "./assets/img/treeLinkedIn.png";
// @ts-ignore
import treeInstagram from "./assets/img/treeInstagram.png";
// @ts-ignore
import treeFacebook from "./assets/img/treeFacebook.png";
// @ts-ignore
import treeTwitter from "./assets/img/treeTwitter.png";

export const Contact:FC = () => {
        return (
        <div className={"overflow-x-hidden"}>
            <div className={"Contact w-screen"}>
                <ImageNetwork name={"LinkedIn"} width={"25%"} larger={"150"} urlImage={treeLinkedin} linkNetwork={"https://www.linkedin.com/"}/>
                <ImageNetwork name={"Facebook"} width={"25%"} larger={"125"} urlImage={treeFacebook} linkNetwork={"https://dragonflight.blizzard.com/fr-fr/"}/>
                <ImageNetwork name={"Instagram"} width={"25%"} larger={"110"} urlImage={treeInstagram} linkNetwork={"https://www.instagram.com/"}/>
                <ImageNetwork name={"Twitter"} width={"25%"} larger={"150"} urlImage={treeTwitter} linkNetwork={"https://kirby.nintendo.com/"}/>
            </div>
            <Footer/>
        </div>
    )

}
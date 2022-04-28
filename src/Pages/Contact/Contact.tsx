import {FC, useState} from "react";
import "./Contact.scss";
import {Footer} from "../../Component";
import {ImageNetwork} from "./ImageNetwork/ImageNetwork";
// @ts-ignore
import treeLinkedin from "./treeLinkedIn.png";
// @ts-ignore
import treeInstagram from "./treeInstagram.png";
// @ts-ignore
import treeFacebook from "./treeFacebook.png";
// @ts-ignore
import treeTwitter from "./treeTwitter.png";

export const Contact:FC = () => {
        return (
        <div>
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
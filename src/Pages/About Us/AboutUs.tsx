import {FC} from "react";
import {Footer} from "../../Component";
// @ts-ignore
import logo from "./assets/img/logo.png";

export const AboutUs:FC= () => {
    return (
        <div>
            <div className={"relative flex flex-col justify-start items-center h-screen"}>
                <div className={"absolute h-screen right-1/3 border-r-2 border-black"}/>
                <div className={"indent-20 mt-10 w-4/5 tracking-wider"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. Pellentesque sit amet laoreet turpis, ac tempor lacus. Nam ut ipsum suscipit, rutrum libero tempor, scelerisque dui. Cras condimentum bibendum lorem, a laoreet dolor aliquam vitae. Etiam ligula mi, sollicitudin non varius nec, pretium sit amet justo. Donec gravida volutpat ex nec rutrum. Integer ut efficitur ante. Aenean imperdiet efficitur suscipit. Ut sed justo nulla. Proin vehicula dolor eget ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. Pellentesque sit amet laoreet turpis, ac tempor lacus. Nam ut ipsum suscipit, rutrum libero tempor, scelerisque dui. Cras condimentum bibendum lorem, a laoreet dolor aliquam vitae. Etiam ligula mi, sollicitudin non varius nec, pretium sit amet justo. Donec gravida volutpat ex nec rutrum. Integer ut efficitur ante. Aenean imperdiet efficitur suscipit. Ut sed justo nulla. Proin vehicula dolor eget ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. Pellentesque sit amet laoreet turpis, ac tempor lacus. Nam ut ipsum suscipit, rutrum libero tempor, scelerisque dui. Cras condimentum bibendum lorem, a laoreet dolor aliquam vitae. Etiam ligula mi, sollicitudin non varius nec, pretium sit amet justo. Donec gravida volutpat ex nec rutrum. Integer ut efficitur ante. Aenean imperdiet efficitur suscipit. Ut sed justo nulla. Proin vehicula dolor eget ullamcorper mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. Pellentesque sit amet laoreet turpis, ac tempor lacus. Nam ut ipsum suscipit, rutrum libero tempor, scelerisque dui. Cras condimentum bibendum lorem, a laoreet dolor aliquam vitae. Etiam ligula mi, sollicitudin non varius nec, pretium sit amet justo. Donec gravida volutpat ex nec rutrum. Integer ut efficitur ante. Aenean imperdiet efficitur suscipit. Ut sed justo nulla. Proin vehicula dolor eget ullamcorper mattis.</div>
                <img className={"h-1/3 ml-72"} src={logo} alt={'logo tree commerce'}/>
            </div>
            <Footer/>
        </div>
    )

}
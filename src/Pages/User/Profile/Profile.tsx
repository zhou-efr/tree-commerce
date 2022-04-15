import {FC, useContext} from "react";
import {UserContext} from "../../../App";

export const Profile:FC = () => {
    const context = useContext(UserContext);

    return (
        <div>
            <h1>Profil</h1>
            <p>{context.user && context.user.username}</p>
            <p>{context.user && context.user.email}</p>
        </div>
    );
}
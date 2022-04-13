import {FC} from "react";

interface userData {
    name: string;
    email: string;
}

interface ProfilProps {
    user: userData;
}

export const Profile:FC<ProfilProps> = (props) => {
    return (
        <div>
            <h1>Profil</h1>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
        </div>
    );
}
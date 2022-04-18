import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../../Constants/Constants";


interface RegisterProps {
    onLogin: (user: any) => void;
}

export const Register:FC<RegisterProps> = (props) => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState<File | null | undefined>(undefined);
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const IncludeCredentialString:RequestCredentials = 'include';

        const formData = new FormData();
        // @ts-ignore
        formData.append('file', profilePicture);

        const upload_url = `${API_URL}/upload`;
        const upload_options = {
            method: 'POST',
            body: formData,
            credentials: IncludeCredentialString,
            headers: {
                'Accept': 'application/json',
            }
        };

        const register_url = `${API_URL}/register`;

        const get_user_url = `${API_URL}/user`;
        const get_user_options = {
            method: 'GET',
            credentials: IncludeCredentialString,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const registerUser = async () => {
            setLoading(true);
            const image_response = await fetch(upload_url, upload_options).catch(err => { setLoading(false); throw err; });
            let image_url = `${API_URL}/files/default-profile-picture.png`;
            if (image_response.status === 200) {
                const image_json = await image_response.json();
                image_url = image_json.fileUrl;
            } else {
                console.log('Image upload failed');
                throw new Error('Image upload failed');
            }
            const register_options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: IncludeCredentialString,
                body: JSON.stringify({
                    username,
                    firstName,
                    lastName,
                    password,
                    email,
                    profilePicture: image_url,
                    address
                })
            };
            await fetch(register_url, register_options).catch(err => { setLoading(false); throw err; });
            const user_response = await fetch(get_user_url, get_user_options).catch(err =>  { setLoading(false); throw err; });
            const user = await user_response?.json();
            if (user) {
                props.onLogin(user);
                navigate('/');
            }else {
                alert('Registration failed');
            }
            setLoading(false);
        };

        registerUser().catch(err =>  { setLoading(false); throw err });
    };
    
    return (
        <div className={"w-1/2 m-3"}>
            <h1 className={"text-lg"}>Register</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className={"w-full px-3 mb-6 md:mb-0"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Username
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"text"}
                        placeholder={"Username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        First Name
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"text"}
                        placeholder={"First Name"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Last Name
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"text"}
                        placeholder={"Last Name"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Email
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"text"}
                        placeholder={"Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Password
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"password"}
                        placeholder={"Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Confirm Password
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"password"}
                        placeholder={"Confirm Password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Address
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"text"}
                        placeholder={"Address"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={"w-full px-3"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Profile Picture
                    </label>
                    <input
                        disabled={loading}
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        type={"file"}
                        placeholder={"Profile Picture"}
                        // value={profilePicture?.toString()}
                        onChange={(e) => setProfilePicture(e.target?.files?.[0])}
                    />
                </div>
                <div className={"mt-5 flex items-center justify-between"}>
                    <button
                        disabled={loading}
                        className={"bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
                        type={"submit"}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}
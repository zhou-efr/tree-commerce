import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";

interface RegisterProps {
    onLogin: (user: any) => void;
}

export const Register:FC<RegisterProps> = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const credentialstring:RequestCredentials = 'include';
        // console.log(username, password, email);

        // send data to localhost:8080/register
        let url = 'http://localhost:8080/register';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: credentialstring,
            body: JSON.stringify({
                username,
                password,
                email
            })
        };

        fetch(url, options)
            .then(res => {
                if (res.status === 200) {
                    console.log('Login success');
                    // retrieve user data from localhost:8080/user
                    url = 'http://localhost:8080/user';
                    const options = {
                        method: 'GET',
                        credentials: credentialstring,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    };
                    fetch(url, options)
                        .then(res => {
                            if (res.status === 200) {
                                console.log('Get user data success');
                                res.json()
                                    .then(data => {
                                        console.log(data);
                                        props.onLogin(data);
                                        navigate('/');
                                    })
                            } else {
                                console.log('Get user data failed');
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    console.log('Failed to register');
                }
            })
            .catch(err => console.log(err));

        // reset states
        // setUsername('');
        // setPassword('');
        // setEmail('');
    };

    return (
        <div className={"w-1/2 m-3"}>
            <h1 className={"text-lg"}>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className={"flex flex-wrap -mx-3 mb-6"}>
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
                </div>
                <div className={"flex items-center justify-between"}>
                    <button
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
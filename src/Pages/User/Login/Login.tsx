import {FC, useState} from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    onLogin: (user: any) => void;
}

export const Login:FC<LoginProps> = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const credentialstring:RequestCredentials = 'include';
        // console.log(email, password);

        // send data to localhost:8080/login
        let url = 'http://localhost:8080/login';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: credentialstring,
            body: JSON.stringify({
                username,
                password
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
                        })
                } else {
                    console.log('Login failed');
                }
            })
            .catch(err => console.log(err));

        // reset state
        // setEmail('');
        // setPassword('');
    };

    return (
        <div className={"w-1/2 m-3"}>
            <h1 className={"text-lg"}>Login</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className={"mb-4"}>
                    <label htmlFor={"username"} className={"block text-gray-700 text-sm font-bold mb-2"}>
                        Username
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                        id={"username"}
                        type={"text"}
                        placeholder={"Username"}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className={"mb-6"}>
                    <label className={"block text-gray-700 text-sm font-bold mb-2"} htmlFor={"password"}>
                        Password
                    </label>
                    <input
                        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}
                        id={"password"}
                        type={"password"}
                        placeholder={"Password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className={"flex items-center justify-between"}>
                    <button
                        className={"bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
                        type={"submit"}
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}
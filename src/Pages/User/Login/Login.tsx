import {FC} from "react";

interface LoginProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Login:FC<LoginProps> = (props) => {
    return (
        <div>
            <h1 className={"text-lg"}>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className={"m-1 border border-black"} type="email" name="email" id="email" onChange={props.handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className={"m-1 border border-black"} type="password" name="password" id="password" onChange={props.handleChange}/>
                </div>
                <button className={"p-1 px-2 shadow-md"} type="submit">Login</button>
            </form>
        </div>
    );
}
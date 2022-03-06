import React, {useState} from 'react'

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import { Link } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const newUser = {
        email,
        password
    };

    const getUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        if(response.ok) {
            localStorage.setItem("token",  response.data.result);
            props.setLoggedIn(true)
        }

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form  onSubmit={(e)=> getUser(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input onChange={handleEmail} type="email" placeholder="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input id="password" onChange={handlePassword} type="password" placeholder="password"/>
                </div>
                <Button type="button" title = 'Login' />
                <Link to="registration">registration</Link>
            </form>
        </div>
    )
};

export default Login;
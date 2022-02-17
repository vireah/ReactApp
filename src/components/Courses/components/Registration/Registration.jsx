import React, {useState} from 'react'

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const newUser = {
        name,
        email,
        password
    };

    const setUsers = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
    }

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form  onSubmit={(e)=> setUsers(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input id="name" onChange={handleName} type="text" placeholder="User Name"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input onChange={handleEmail} type="email" placeholder="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input id="password" onChange={handlePassword} type="password" placeholder="password"/>
                </div>
                <Button type="button" title = 'Registration' />
            </form>
        </div>
    )
};

export default Registration;
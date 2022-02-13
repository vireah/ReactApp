import React from 'react';

import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    let navigate = useNavigate();

    const logoutClick = () => {
        props.setLoggedIn(false);
        localStorage.removeItem('isAuthenticated');
        navigate('/login')
    }

    return (
        <div className="header">
            <Logo />
            <Button onClick={logoutClick} title = 'Logout' />
        </div>
    )
};

export default Header;
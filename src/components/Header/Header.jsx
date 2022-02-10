import React from 'react';

import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Button title = 'Logout' />
        </div>
    )
};

export default Header;
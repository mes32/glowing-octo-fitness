import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navbar() {
    const history = useHistory();

    const handleClick = (target) => {
        history.push(target);
    }

    return (
        <Menu>
            <Menu.Item
                name='about'
                onClick={() => handleClick('/about')}
            >
                About
            </Menu.Item>
            <Menu.Item
                name='login'
                onClick={() => handleClick('/login')}
            >
                Login
            </Menu.Item>
            <Menu.Item
                name='logout'
                onClick={() => handleClick('/logout')}
            >
                Logout
            </Menu.Item>
        </Menu>
    );
}

export default Navbar;
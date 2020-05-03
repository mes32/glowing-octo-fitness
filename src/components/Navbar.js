import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
// import styled from 'styled-components';

function Navbar() {
    const history = useHistory();

    const handleClick = (target) => {
        history.push(target);
    }

    return (
        <Menu>
            <Menu.Item header>GlowingOcto</Menu.Item>
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

// const StyledMenu = styled.Menu`
//     background-color: blue;
// `;

export default Navbar;
import React from 'react';
import logo from './assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from "semantic-ui-react";
const Header = ({ state, handleSelectPage }) => {
    return (
        <div className='header'>
            <div><img src={logo} alt='header logo' /></div>
            <div className='header-line'>
            </div>
            <div className='header-menucantainer'>
            </div>
            <Menu className='header-menucontent'>
                <Menu.Item
                    className='header-menucontent-text'
                    id={0}
                    active={state === 0}
                    onClick={handleSelectPage}
                    key={0}
                    as={Link}
                    to="/"
                >
                    <span>
                        00
                    </span>
                    HOME
                </Menu.Item>
                <Menu.Item
                    className='header-menucontent-text'
                    id={1}
                    active={state === 1}
                    onClick={handleSelectPage}
                    key={1}
                    as={Link}
                    to="/Destination"
                >
                    <span>
                        02
                    </span>
                    DESTINATION

                </Menu.Item>

                <Menu.Item
                    className='header-menucontent-text'
                    id={2}
                    active={state === 2}
                    onClick={handleSelectPage}
                    key={2}
                    as={Link}
                    to="/Crew"
                >
                    <span>
                        03
                    </span>
                    CREW
                </Menu.Item>
                <MenuItem
                    className='header-menucontent-text'
                    id={3}
                    active={state === 3}
                    onClick={handleSelectPage}
                    key={3}
                    as={Link}
                    to="/Technology"
                >
                    <span>
                        04
                    </span>
                    TECHNOLOGY
                </MenuItem>
            </Menu>
        </div >
    )
}

export default Header

import React from 'react';
import logo from './assets/shared/logo.svg';
import { Menu, MenuItem } from "semantic-ui-react";
import { Link } from 'react-router-dom';
const Header = (props) => {
    const { state, handleSelectPage } = props;
    return (
        <div className='header'>
            <div><img src={logo} alt='header logo' /></div>
            <div className='header-line'>
            </div>
            <div className='header-menucantainer'>
            </div>
            <Menu className='header-menucontent'>
                <Menu.Item
                    id={1}
                    active={state === 1}
                    onClick={handleSelectPage}
                    key={1}
                >
                    <Link to="/">
                        <span>
                            01 HOME
                        </span>
                    </Link>
                </Menu.Item>
                <Menu.Item
                    id={2}
                    name="Page 2"
                    active={state === 2}
                    onClick={handleSelectPage}
                    key={2}
                >
                    <Link to="/Destination">
                        <span>
                            02 DESTINATION
                        </span>
                    </Link>

                </Menu.Item>

                <Menu.Item
                    id={3}
                    active={state === 3}
                    onClick={handleSelectPage}
                    key={3}
                >
                    <Link to="/Crew">
                        <span>
                            03 CREW
                        </span>
                    </Link>
                </Menu.Item>
                <MenuItem
                    id={4}
                    active={state === 4}
                    onClick={handleSelectPage}
                    key={4}
                >
                    <Link to="/Technology">
                        <span>
                            04 TECHNOLOGY
                        </span>
                    </Link>
                </MenuItem>
            </Menu>
        </div >
    )
}

export default Header

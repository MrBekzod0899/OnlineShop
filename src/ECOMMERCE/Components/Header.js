import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FaRegUser,FaSearch} from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './header.css'


const Header=()=> {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
        return (
            <div className="header">
                <div className="container-fluid container-md-fluid container-sm-fluid container-fluid">
                    <div className="row">
                        <div  className="col-lg-10 offset-lg-2 col-md-10 offset-md-2 col-sm-12 col-12" >
                            <ul>
                                <li>
                                    <FaRegUser/>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls="demo-positioned-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        My account
                                    </Button>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </li>
                                <li>
                                    <a> 
                                        <RiShoppingCartFill/>
                                     <span className="text-danger">2</span>
                                    </a>
                                   
                                </li>
                                <li>
                                    <Link>items</Link>
                                </li>
                                <li>
                                    <span>$0.00</span>
                                    <a href="#"><FaSearch/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Header

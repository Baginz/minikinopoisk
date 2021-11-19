import React, { useContext } from 'react';
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../../context";
import './Navbar.css';



const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        console.log(isAuth)
    }

    return (
        <div className="header">
            <div className="navbar">
                <ul>
                    <li ><NavLink to="/" className={ 'subnav_link'} >Home</NavLink></li>
                    <li ><NavLink to="/news" className={ 'subnav_link'} >News</NavLink></li>
                    <li ><NavLink to="/contact" className={ 'subnav_link'} >Contact</NavLink></li>
                    <li ><NavLink to="/about" className={'subnav_link'} >About</NavLink></li>
                </ul>
                <NavLink to="/" onClick={logout} className={({isActive})=> isActive ? 'subnav_link' : 'subnav_link'} >Logout</NavLink>
            </div>
        </div>
    );
};

export default Navbar;

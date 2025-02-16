import {LOGO_URL} from "../utils/contents";
import React from "/node_modules/react";
import { useState } from "/node_modules/react";

//Step 2: Now lets make a component for Header:consistes Logo and NAv links
const Header = ()=> {

    const [btnName, setbtnName] = useState("Login");
    return (
        <div className='header'>
            <div className="nav-container">
                <div className='logo-container'>
                <img 
                    className="logo" 
                    src = {LOGO_URL}
                />
                </div>
                    <ul className='nav-items'>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className = "login" onClick = {() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}
                        >{btnName}</button>
                </ul>
            </div>
        </div>
    ) ;
} ;
export default Header;

//Note: when the login button is changing the whole header is getting re-rendered
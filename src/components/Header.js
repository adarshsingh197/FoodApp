import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus()
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items)
 
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAXL0J0iAXdVkrENIuHtEUU2bM6DRV1xHgA&s" alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus==true?"Online":"Offline"}</li>
                    <li  className="px-4">
                        <Link to='/grocery'></Link>
                    </li>
                    <li  className="px-4">
                     <Link to='/'>Home </Link>   
                    </li>
                    <li  className="px-4">
                     <Link to="/about">About us</Link>    
                    </li>
                    <li  className="px-4">
                     <Link to="/contact"> Contact us</Link>   
                    </li>
                    <li className="font-bold">
                    <Link to="/cart"> Cart-({cartItems.length} items)</Link>   
                        
                    </li>
                </ul>
                <button className="loginButton" onClick={() => setBtnName(btnName === "login" ? "logout" : "login")}>
                    {loggedInUser}
                </button>
            </div>
        </div>
    );
};

export default Header;

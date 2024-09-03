import React from "react";
import { useState, useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About=()=>{

    const {loggedInUser} = useContext(UserContext);
    return(
        <div>
            <h1>About Page</h1>
            <h2>{loggedInUser}</h2>
            <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
      
            <UserClass name="Adarsh" location="Hyderabad"/>
        </div>

    )
}

export default About;
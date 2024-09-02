import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h1>About Page</h1>
            <User/>
            <UserClass name="Adarsh" location="Hyderabad"/>
        </div>

    )
}

export default About;
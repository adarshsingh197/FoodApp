import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }
       
        console.log(props);
    }

    async  componentDidMount(){
       const data = await fetch("https://api.github.com/users/akshaymarch7");
       const json = await data.json();
       this.setState({
        userInfo:json
       })
       console.log(json);
    }
    async componentDidUpdate(){
        console.log("component did Update")
    }
    componentWillUnmount(){
        console.log("component Unmount")
    }


    render(){
        const {count,count2} =this.state
        const {name,location}=this.state.userInfo
        return (
            <div className="user-card">
              <h2>Name:{name}</h2>
              <h3>Location:{location}</h3>
            </div>
        )
    }

}

export default UserClass
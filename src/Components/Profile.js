import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           userInfo : {
            name:"Dummy Name",
            location: "Dummy Location",
            bio: "Dummy Bio",
            avatar_url:""
           }
          }
        console.log("child constructor is called")
    }
    async componentDidMount(){
         this.timer = setInterval(() => {
            console.log(" REACT OP ");
          }, 1000);
            //fetching API
            const data = await fetch("https://api.github.com/users/asma-zahra");
            const json = await data.json();
            console.log(json);
            this.setState({
                userInfo: json,
            })
            console.log("child componentDidMount called after the child component render" );
        
     
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate called after the DOM update beacuse of State or Props Changed")
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will UnMount ")
    }
    render(){
        console.log("child render method is called")
        return(
            <div className="Profile">
            <h2>Profile Component</h2><br/>
            <img src={this.state?.userInfo?.avatar_url} alt="" />
            <h3>{this.state?.userInfo?.name}</h3><br/>
            <h4>{this.state?.userInfo?.bio}</h4><br/>
            <h5>{this.state?.userInfo?.location}</h5>
            </div>
        )
    }
}
export default Profile;
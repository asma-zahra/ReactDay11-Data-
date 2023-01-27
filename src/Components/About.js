import React from "react";
import Profile from "./Profile";


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount(){
    console.log("Parent componentDidMount Method called after the render of Parent  component")
  }
  render(){
    console.log("render method of Parent called which is retuning the JSX")
    return(
      <div className="container about">
      <h1>About us page </h1>
      <Profile/>  
      </div>
    )
  }
}
export default About;

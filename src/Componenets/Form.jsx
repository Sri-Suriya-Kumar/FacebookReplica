import React, { Component } from "react";
import stylesheet from "../Componenets/stylesheet.css"

class Form extends Component{

    state = {
        name : "",
        password : "",
    };

    handlefb = (a) => {
            this.setState({[a.target.name]:a.target.value})
    }


    render(){
        return (
            <div>
                <div className="header">
                <h1>facebook</h1>
                <h2>Facebook helps you connect and share<br/>with the people in your life</h2>
                </div>
                <form className="user">               
                <input type="text" value={this.state.name} name="name" onChange={this.handlefb} placeholder="Enter your UserName or Email"/><br/>
                <input type="password" value={this.state.password} name="password" onChange={this.handlefb} placeholder="Enter your Password"/><br/>
                <button className="loginbtn">Login</button>
                <a href="" >Forgotten Password</a><hr/>
                <button className="crbtn">Create New Account</button>
                </form>
                <span className="base">
                <a href=""><b>Create a page</b></a> for a celebrity, brand or buisness.
                <div>User name is {this.state.name} <br/> Password is {this.state.password}</div>
                </span>
                </div>
        );
    }
}

export default Form
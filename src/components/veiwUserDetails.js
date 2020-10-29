import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Profilepic from "./Profilepic";


const mapStateToProps = state =>{
    return {
       users:state.users
    }
}

class ViewUserDetails extends   Component{
    render(){
        console.log(this.props.users)
        return(
            <div>
            <h1>User Profile</h1>            
            {this.props.users.map((users) =>(
                <div>            
                <Profilepic/>
                <h2> Username:{users.username}</h2><br/>
                <h2> Country: {users.country}</h2><br/>
                <h2>  Profile Created on:{users.signupDate}</h2><br/>
                </div>
            ))}
            </div>
        )
        }
}

export  default   connect (mapStateToProps)(ViewUserDetails);
import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Profilepic from "./Profilepic";
import {getdata} from "../actions/index";


const mapStateToProps = state =>{
    return {
       users:state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getdata: () => dispatch(getdata())
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
                <h2> Username:<span role = "img" aria-label= "Man">👨</span>{users.username}</h2><br/>
                <h2> Country: {users.country}</h2><br/>
                <h2> Profile Created on:{users.signupDate}</h2><br/>
                </div>
            ))}
            </div>
        )
        }
}

export  default   connect (mapStateToProps,mapDispatchToProps)(ViewUserDetails);
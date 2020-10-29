import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {veiwLoggedInUser} from "../actions/index";

const mapStateToProps = state =>{
    return {
        veiwProfile: state.viewProfile,
       users:state.users
    }
}
 
const  mapDispatchToProps = dispatch =>{
    return{
        veiwLoggedInUser:(username) => dispatch(veiwLoggedInUser(username))
    }
}
class PostLoginPage extends  Component{
    constructor(){
        super();
        this.state={
            username:' '
        }
    }
    handel=()=>{this.setState({username:this.props.viewProfile.username})}

veiwLoggedInUser = (username)   =>{
    console.log(username);
    this.props.veiwLoggedInUser(username)
}

render(){
        console.log(this.props.users)
        return(
            <>
            <div className = "container">
            <h1>Welcome</h1>
            <p className =  'bg-success text-white'><i>You are  Logged in successfully.........!! </i></p><br/>
            <p>Click here to View User Details </p>
            <Button onClick = {this.veiwLoggedInUser} size="large"  variant = "contained"color ="primary" href = '/viewuserdetails'>View-Details</Button><br/><br/>      
            </div>
            </>
        )
    }
}
 export  default connect(mapStateToProps, mapDispatchToProps) (PostLoginPage);
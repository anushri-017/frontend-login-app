import  React, { Component } from 'react';
import  {connect} from 'react-redux';
import {loggedin,veiwLoggedInUser} from "../actions/index";
import Container  from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import{Button,TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';

class  LoginPage extends  Component{
    constructor(){
        super();
        this.state={
            username:null,
            password:null
        }
    }
    handlename = (event) =>{
        this.setState({username: event.target.value})
    }
    handlepassword = (event) =>{
        this.setState({password: event.target.value})
    }
    onlogin  = event =>{
     if(this.state.username ===""||this.state.password==="")
    event.preventDefault();
    console.log(this.state)
    this.props.loggedin(this.state);
    this.props.veiwLoggedInUser(this.state.username)
    }

    render(){ 
        return( 
            <>
            <div className =  "loginpage">  
            <Container >
            <form>
            <Paper elevation = {9} >
            <h1 className ='text-white  bg-info'>Login to your Account</h1>
            <label className="text-info font-weight-bold label">
            <PersonSharpIcon  fontSize = "large"/>
            <TextField className=' text-center form-group font-weight-italic'  
            onChange = {this.handlename}
            variant ="outlined"
            label ="Username"  
            type='text' required /></label>
            <br/>
            <label className="text-info font-weight-bold label ">
            <VisibilitySharpIcon fontSize ="large" />
            <TextField  className='input text-center form-group  font-weight-italic' 
            onChange = {this.handlepassword}
            variant="outlined"
             label ="Password" 
            type='text' required /></label>
            <br/><br/>
            <Button  size="large"  variant = "contained"  onClick = {()=>{this.onlogin()}}>
            <Link to = "/postLoginPage">
            Login</Link></Button>
            <br/><br/>
            <p>Sign-up to create account.....!!! </p>
            <Button size = "large" variant = "contained" color = "primary" href="/register"> Sign-up<span role = "img" aria-label= "Memo">📝</span> </Button>
            <br/><br/><br/>
            </Paper>
            </form>
            </Container>
            </div>
            </>
        )       
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loggedin:(data) => dispatch(loggedin(data)),
        veiwLoggedInUser:(username) =>dispatch(veiwLoggedInUser(username))
    }
}

export default connect(null,mapDispatchToProps) (LoginPage);
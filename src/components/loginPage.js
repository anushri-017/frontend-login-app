import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Container  from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextFeild from '@material-ui/core/TextField';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import{Button} from '@material-ui/core'

class  LoginPage extends  Component{
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
            <TextFeild className=' text-center form-group font-weight-italic' 
            placeholder="Username"  
            type='text' required /></label>
            <br/>
            <label className="text-info font-weight-bold label ">
            <VisibilitySharpIcon fontSize ="large" />
            <TextFeild className='input text-center form-group  font-weight-italic' 
            placeholder="Password" 
            type='text' required /></label>
            <br/><br/>
            <Button  size="large" variant ="contained" color ="primary">Login</Button>
            <br/><br/>
            <p>Sign-up to create account.....!!! </p>
            <Button size = "large" variant = "contained" color = "inherit">
            <Link to = '/'>
            Sign-up
            </Link>
            </Button>
            <br/><br/><br/>
            </Paper>
            </form>
            </Container>
            </div>
            </>
        )       
    }
}


export default  LoginPage;
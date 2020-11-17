import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {Link} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import {Container,Button} from '@material-ui/core';

class PostLoginPage extends  Component{
  
render(){
        return(
            <>
           <Container className = "App">
            <h1>Welcome</h1>
            <Alert variant="outlined" severity="success">
            <i>You are  Logged in successfully.........!! </i>
          </Alert>
          <br/>
            <br/><br/><br/>
            <p>Click here to view User Details </p>
                <Button size="large" color = 'secondary'>
                <Link to ='/viewUserDetails'>
              Click-here        
                </Link></Button><br/><br/>      
                <p>Click here to view  all the User-Details </p>
                <Button size="large"  color = 'primary'>
                <Link to ='/search'>
                Click-here
                </Link></Button><br/><br/>    
                </Container>
            </>
        )
    }
}

const mapStateToProps = state =>{
  return {
     loggedUser:state.userProfile.loggedUser   
  }
}
 export  default connect(mapStateToProps) (PostLoginPage);
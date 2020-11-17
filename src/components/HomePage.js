import  React,{Component} from 'react';
import {Card, Typography,Container} from '@material-ui/core';
import { Button } from '@material-ui/core';


class HomePage extends Component{
    render(){
        return(
            <>
            <Container className = "App">
            <Card elevation = {9}>      
            <Typography variant = "h1" color = "textPrimary">
               Welcome to  <br/>Mern-Login-App<span role="img" aria-label="Party Popper"> 🎉</span> 
            </Typography><br/><br/><br/><br/>
            <Typography variant = "h3"  color = "textPrimary">
               Click here<span role="img" aria-label="Down Arrow"> ⬇️</span>  to register...!!<br/>
               <Button variant = "contained"   size = "large" href ="/register">Register Now</Button>
            </Typography><br/><br/>
            <Typography variant = "h4"  color = "textPrimary">
               Already have a account...!!!<span role="img" aria-label="Key">🔑</span> <br/>
               <Button  href ="/Login" variant = "contained"   size = "large">Login</Button>
            </Typography><br/><br/><br/><br/>
            </Card>
            </Container>
            </>
        )
    }
}

export default HomePage;
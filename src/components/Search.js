import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { getdata } from '../actions/index';
import pic3 from "./pics/pic3.png";
import { Container,Grid ,Card, CardActionArea, CardMedia, CardContent, CardHeader } from '@material-ui/core';


const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getdata: () => dispatch(getdata())
    }
}

class Search extends Component {

    componentDidMount() {
        this.props.getdata()
    }
     
    render() {     
        return (
         <Container className =  "App">
            <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color = "inherit">
             User-Details
              </Typography>
              <IconButton
              edge=""
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit">
              <AccountCircle />
              </IconButton>
            </Toolbar>  
            </AppBar> <br/><br/>
            {this.props.users.map((user, index) => (           
            <Grid container spacing ={5}>
            <Grid item sm = {4}>
            <Card>  
            <CardHeader>
            <Avatar variant = "square">
            <PersonSharpIcon/>
            </Avatar>
            </CardHeader>
            <CardActionArea>
            <CardMedia component = "img" image ={pic3}
             style = {{height:200}}/>
            <CardContent>
            <Typography variant  = "h6"> <label>Username:</label>{user.username}</Typography>   
            <Typography variant  = "h6"><label>Email-Id:</label>{user.email}</Typography>   
            <Typography variant  = "h6"> <label>Country:</label>{user.country}</Typography>  
            <Typography variant  = "h6"> <label>Profile Created On:</label>{user.signupDate}</Typography>  
            </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
            </Grid>
            ))}
           </Container>       
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);

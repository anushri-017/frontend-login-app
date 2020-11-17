import React, { Component} from 'react';
import {AppBar,IconButton,Typography,Toolbar,Button,Grid ,Card,CardContent,Container} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { getdata } from '../actions/index';
import Avatar from 'react-avatar';


const mapStateToProps = state => {
    return {
        users: state.userProfile.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getdata: () => dispatch(getdata())
    }
}

class Search extends Component {
    constructor(){
        super()
        this.state = {
            spacing:''
        }
    }
    
    componentDidMount() {
        this.props.getdata()
    }
     
    render() {  
        return (
            <Container className = "App">
            <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color = "inherit"> User-Details</Typography>
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
            <Grid container className="App" spacing={5}>
            <Grid item xs={6} sm={12}>
            <Grid container justify="center" spacing={2}>
            {this.props.users.map((user,index)=>(
                <Card>
                <br/><br/>
                <CardContent>  
                <Avatar   className = 'mr-2' name={user.username}  round = {true} size="100"/>
                <Typography  color="textPrimary"  variant = "h4" gutterBottom>
                UserName: {user.username}</Typography>
              <Typography variant="subtitle1" component="p">
                Email:{user.email}
              </Typography>
              <Typography variant="subtitle1" component="p">
              Country:{user.country}
              </Typography>
              <Typography variant="subtitle1" component="p">
              Created On:{user.signupDate}
              </Typography> 
              <br/>    
              </CardContent>
              </Card>
              ))}
            </Grid>
            </Grid>
            </Grid>
            <br/>
            <Button href = "/postLoginPage" variant="contained" color = "primary">Back</Button>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

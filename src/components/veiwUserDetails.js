import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { Button,Paper,Typography,TextField, InputLabel} from '@material-ui/core';
import {Container,Row,Col} from 'react-bootstrap';
import {createData} from '../actions/index';
import pic1 from './pics/pic1.png';

const mapStateToProps = state =>{
    return {
       loggedUser:state.userProfile.loggedUser   
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        createData: (data) => dispatch(createData(data))
    }
}

class ViewUserDetails extends   Component{
    constructor(props){
        super(props);
        this.state = {
            profileImage:this.props.profileImage,
            uploadedFile:null
        }
    }
 onSubmit = (e) =>{
     e.preventDefault();
     const formData = new FormData();
     formData.append("profileImage",this.state.uploadedFile);
    this.props.createData(formData);
 }

 onFileChange = (e) =>{
     console.log(e.target.files[0]);
     this.setState({uploadedFile:e.target.files[0]})
 }

    render(){
        if (this.state.profileImage){
            var profilePic = this.state.profileImage;
        }
        else{
            profilePic = pic1;
        }
        return(
            <>
            <Container className = "App">
            <Paper elevation={9}>
            <alert>{this.props.loggedUser.msg}</alert>
            <Typography  variant="h3" color = "textPrimary">
            Showing User-Details
            </Typography>     
            <Row>
            <Col mr='5' mt="3">
            <br/>
           <img src = {profilePic}  alt = "profile pic" width = {300}/>
            </Col>
            <Col>
            <form action= "/upload" method = "post" enctype = "multipart/form-data">            
                <InputLabel><h5>Username:</h5>
               <TextField   variant="outlined" type='text' size="medium" value={this.props.loggedUser.username}/></InputLabel>
               <InputLabel><h5>Email-Id:</h5>
               <TextField  variant="outlined" type='text'  value={this.props.loggedUser.email}/></InputLabel>
               <InputLabel><h5>Country:</h5>
               <TextField  variant="outlined" type='text'  value={this.props.loggedUser.country}/></InputLabel>
               <InputLabel><h5>Profile Created On:</h5>
               <TextField variant="outlined" type='text'  value={this.props.loggedUser.signupDate}/></InputLabel>
               <InputLabel><h5>Add Profile Picture</h5>
                   <input type="file"  name = 'profileImage'  onChange = {this.onFileChange} /></InputLabel>
                   <Button  color = "primary"  variant = "contained" onClick={this.onSubmit}  type="submit">
                       Upload</Button><br/><br/>
                 </form>
                </Col>
                </Row>
                </Paper>
                <br/><br/><br/>
                <Button href = "/" variant="contained" color = "primary">Logout</Button>
                 </Container>
            </>
        )
        }
}

export  default connect (mapStateToProps,mapDispatchToProps)(ViewUserDetails);
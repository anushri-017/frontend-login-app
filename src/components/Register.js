import { Container,Paper,Button,TextField} from '@material-ui/core';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import MailSharpIcon from '@material-ui/icons/MailSharp';
import {connect} from 'react-redux';
import  {createData} from '../actions/index';
import React, { Component } from 'react';

class Register extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username:'',email:"", password:"",country:''
        }
    }
    handelname = event =>{
        this.setState({username:event.target.value})
    }
    handelpassword= event =>{
        this.setState({password:event.target.value})
    }
    handelcountry = event =>{
        this.setState({country:event.target.value})
    }    
    handelmail = event =>{
        this.setState({email:event.target.value})
    }    
    handlesubmit = e => {
        if(this.state.username===''|| this.state.password===""||this.state.cnfpassword===""||this.state.country===""||this.state.email==="")
        e.preventDefault();
            console.log(this.state)
            this.props.createData(this.state);
            this.props.history.push('/login');  
    }
    render(){
        console.log(this.props.createData)
        return(
            <>
            <div className =  "loginpage">  
            <Container >
            <form>
            <Paper elevation = {9} >
            <h1 className ='text-white  bg-info'>Register Now</h1><br/>
            <label className="text-info font-weight-bold label ">
            <PersonSharpIcon  fontSize = "large"/>
            <TextField className='input text-center form-group  font-weight-italic' 
            label ="UserName"   variant="outlined"  type='text'  value = {this.state.username}  
            onChange = {this.handelname} required /></label><br/>
            <label className="text-info font-weight-bold label"> 
            <MailSharpIcon fontSize = "large"/>
             <TextField className='input text-center form-group  font-weight-italic' 
            label ="Enter Your  email"   variant="outlined" type='text'  value = {this.state.email}  
            onChange = {this.handelmail} required/></label><br/>
            <label className="text-info font-weight-bold label">
            <PublicSharpIcon fontSize = "large"/>
             <TextField className='input text-center form-group font-weight-italic' 
            label="Enter Your Country"  variant="outlined"  type='text'  value = {this.state.country} 
             onChange = {this.handelcountry} required/></label><br/>
            <label className="text-info font-weight-bold label">
            <VisibilitySharpIcon  fontSize = "large"/>
            <TextField className='input text-center form-group font-weight-italic' 
            label="Password"  variant="outlined"  type='text'  value = {this.state.password}  
            onChange = {this.handelpassword}  required/></label><br/><br/>
            <Button onClick = {this.handlesubmit} size="large" variant ="contained" color ="primary">Register<span role = "img" aria-label= "Memo">📝</span></Button><br/><br/>
            <p>Already,have an account!! <span role="img" aria-label="lock">🔒 </span> </p>
            <Button size = "large" variant = "contained" color = "primary" href = '/login'>Login<span role = "img" aria-label= "Down-Arrow">⬇️</span></Button><br/><br/><br/>
            </Paper>
            </form>
            </Container>
            </div>
            </>
        )
    }
}  

const mapDispatchToProps = (dispatch) => {
    return {
        createData: (data) => dispatch(createData(data))
    }
}

const mapStateToProps = (state) => {
    return {
        users:state.users
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Register);
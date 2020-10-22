import React, { Component } from 'react';
import {connect } from 'react-redux';
import {getdata} from "../actions/index";


const  mapStateToProps = state =>{
    return {
        users:state.users
    }
};
 
const mapDispatchToProps = dispatch =>{
    return{
        getdata: () =>dispatch(getdata())
    }
}

class Status extends Component{
    render(){
        return(
            <div>
            <h1>Profile...!!</h1>
            {this.props.users.map(users=>(
                <ul classname = "list">
                <li>{users.username}</li>
                <li>{users.email}</li>
                </ul>
            ))}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Status);
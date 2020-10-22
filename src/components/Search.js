import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  {getdata} from '../actions/index';

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

class Search extends Component{
 componentDidMount(){
     this.props.getdata();
 }

    render(){
        return(
            <div>
            <h2><b>User-Details</b></h2>
            <table className='table '>
                        <thead>
                            <tr>
                                <th className='tr'>S.No:</th>
                                <th className="tr" >Username</th>
                                <th className="tr">E-Mail</th>
                                <th className="tr">Country</th>
                                <th className ="tr">Date</th>
                                <th className = "tr">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((users, index) => (
                                <tr className='tr' key={index}>
                                    <td className="tr">{index + 1}</td>
                                    <td className="tr">{users.username}</td>
                                    <td className="tr">{users.email}</td>
                                    <td className="tr">{users.country}</td>
                                    <td className="tr">{users.signupDate}</td>
                                    <td className="tr">
                                    <button className = "btn btn-warning ml-2 py-1">
                                    <Link to = '/status'>View</Link></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        )
    }
}
export default   connect (mapStateToProps,mapDispatchToProps)(Search);
import {CREATE_DATA,GET_DATA,LOG_DATA,VIEW_PROFILE} from   '../contants/action-types';
import  axios from "axios";   
import  SetAuthToken  from "../utils/setAuthToken";
import  jwt_decode from 'jwt-decode';

const create = () => {
    return {
        type: CREATE_DATA
    }
}
const get = (data) => {
    return {
        type: GET_DATA
        , payload: data
    }}
const setCurrentUser = data =>{
    return{
        type:LOG_DATA,
        payload:data
    }
}
const  loggedUser = (data)=>{
    return{
        type:VIEW_PROFILE,
        payload:data
    }
}
export function createData(data) {
    console.log(data)
    return function (dispatch) {
        axios.post("http://localhost:5000/register", data)
        dispatch(create())    
    }
}
export function getdata() {
    return function (dispatch) {
        fetch("http://localhost:5000/viewusers")
            .then((response) => response.json())
            .then(data => dispatch(get(data)))
    }
}

export  function veiwLoggedInUser(username){
    console.log(username)
    return function (dispatch){
        fetch(`http://localhost:5000/loggedinuser/${username}`)
        .then((res) => res.json())
        .then(data => dispatch(loggedUser(data)))
    }
}

 export function  loggedin(data){
     return function(dispatch){
         axios.post("http://localhost:5000/login",data)
                .then (res => 
                    {
                    const {jwtoken} = res.data;
                    localStorage.setItem("jwtoken",jwtoken);
                    SetAuthToken(jwtoken);
                    localStorage.getItem('jwtoken');
                    const decoded = jwt_decode(jwtoken,{header:true});
                    dispatch(setCurrentUser(decoded));
                })             
     }
 }

 export const logoutUser = () => dispatch =>{
     localStorage.removeItem("jwtoken");
     SetAuthToken(false);
     dispatch(setCurrentUser({}));
 }

 

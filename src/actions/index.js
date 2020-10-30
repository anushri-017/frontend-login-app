import {CREATE_DATA,GET_DATA,LOG_DATA,VIEW_PROFILE} from   '../contants/action-types';
import  axios from "axios";   
import  SetAuthToken  from "../utils/setAuthToken";

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
 export const setCurrentUser = data =>{
    return{
        type:LOG_DATA,
        payload:data
    }
}
export function createData(data) {
    console.log(data,"from createdata")
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
 export function  loggedin(data){
     return function(dispatch){
         axios.post("http://localhost:5000/login",data)
                .then (res =>{
                    const {token} = res.data;
                    localStorage.setItem("token" ,token);
                    SetAuthToken(token);
                    localStorage.getItem('token');
                    // const decoded = jwt_decode(token);
                    dispatch(setCurrentUser(data));
                })             
     }
 }

 export const logoutUser = () => dispatch =>{
     localStorage.removeItem("token");
     SetAuthToken(false);
     dispatch(setCurrentUser({}));
 }

 const  loggedUser = (data)=>{
     return{
         type:VIEW_PROFILE,
         payload:data
     }
 }

 export  function  veiwLoggedInUser(username){
     console.log(username)
     return function (dispatch){
         fetch(`http://localhost:5000/loggedinuser/${username}`)
         .then((res) => res.json())
         .then(data => dispatch(loggedUser(data)))
     }
 }
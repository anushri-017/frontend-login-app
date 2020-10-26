import {CREATE_DATA,GET_DATA,LOG_DATA} from   '../contants/action-types';
import  axios from "axios";   
import  SetAuthToken  from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';


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
 export const setCurrentUser = decoded =>{
    return{
        type:LOG_DATA,
        payload:decoded
    }
}
export function createData(data) {
    return function (dispatch) {
        axios.post("http://localhost:5000/signup", data)
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
     console.log('calling from loggedin function',data )
     return function(dispatch){
         axios.post("http://localhost:5000/login",data)
                .then (res =>{
                    const {token} = res.data;
                    localStorage.setItem("jwtToken" ,token);
                    SetAuthToken(token);
                    const decoded = jwt_decode(token);
                    dispatch(setCurrentUser(decoded));
                })             
     }
 }

 export const logoutUser = () => dispatch =>{
     localStorage.removeItem("jwtToken");
     SetAuthToken(false);
     dispatch(setCurrentUser({}));
 }
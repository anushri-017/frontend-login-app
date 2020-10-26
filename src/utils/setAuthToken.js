import  axios from 'axios';

const SetAuthToken  =  token =>{
    if (token){
        axios.defaults.headers["x-access-token"] = token;
    }} 
export default  SetAuthToken;
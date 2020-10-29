import  axios from 'axios';

const SetAuthToken  =  token =>{
    if (token){
        axios.defaults.headers={ 'x-access-token': localStorage.getItem('token') }
    }} 
export default  SetAuthToken;
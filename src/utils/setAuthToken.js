import  axios from 'axios';

const SetAuthToken  =  jwtoken =>{
    if (jwtoken){
        axios.defaults.headers={ 'x-access-token': localStorage.getItem('jwtoken') }
    }} 
export default  SetAuthToken;
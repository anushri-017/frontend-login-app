import {CREATE_DATA,GET_DATA} from   '../contants/action-types';
import  axios from 'axios';   

const create = () => {
    return {
        type: CREATE_DATA
    }
}
const get = (data) => {
    return {
        type: GET_DATA
        , payload: data
    }
}

export function createData(data) {
    console.log("Posting data on Database")
    return function (dispatch) {
        axios.post("http://localhost:5000/logindata", data)
        dispatch(create())    
    }
}
export function getdata() {
    console.log("Getting users data")
    return function (dispatch) {
        fetch("http://localhost:5000/getuserdata")
            .then((response) => response.json())
            .then(data => dispatch(get(data)))
    }
}
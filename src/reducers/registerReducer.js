import {CREATE_DATA} from  '../contants/action-types';

const initialState ={
    users:[]
}

const  registerReducer  = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_DATA:
            return{
                ...state
            }
            default:
                return state;
        }
    }
    export default registerReducer;
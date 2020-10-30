import {GET_DATA} from  '../contants/action-types';

const initialState ={
    users:[]
}

const  veiwUserReducer= (state= initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                users:action.payload
            }
            default:
                return state;
        }
    }
    export default veiwUserReducer;

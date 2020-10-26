
import {CREATE_DATA,GET_DATA,LOG_DATA} from  '../contants/action-types';

const initialState ={
    users:[]
}
const  LoginReducer  = (state= initialState,action)=>{
    switch(action.type){
        case CREATE_DATA:
            return{
                ...state
            }
            case GET_DATA:
                return {
                    ...state,
                    users:action.payload
                }
                case LOG_DATA:
                    return{
                        ...state,
                        
                    }
        default:
            return state;
    }
}
export default LoginReducer;

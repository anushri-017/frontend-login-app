
import {CREATE_DATA,GET_DATA,LOG_DATA,VIEW_PROFILE} from  '../contants/action-types';

const initialState ={
    users:[] ,veiwProfile:[]
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
                        ...state                       
                }
                case VIEW_PROFILE:
                    return{
                        ...state,
                        veiwProfile:action.payload
                    }
        default:
            return state;
    }
}
export default LoginReducer;

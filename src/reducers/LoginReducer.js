
import {LOG_DATA} from  '../contants/action-types';

const initialState ={
    loginUser:[]
}
const  loginReducer  = (state= initialState,action)=>{
    switch(action.type){
                case LOG_DATA:
                    return{
                        ...state,
                        loginUser:action.payload                       
                }
        default:
            return state;
    }
}

export default  loginReducer;
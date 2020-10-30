
import {LOG_DATA,VIEW_PROFILE} from  '../contants/action-types';

const initialState ={
    veiwProfile:[]
}
const  loginReducer  = (state= initialState,action)=>{
    switch(action.type){
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

export default  loginReducer;
import {GET_DATA,VIEW_PROFILE} from  '../contants/action-types';

const initialState ={
    users:[],loggedUser:{}
}
const  veiwUserReducer= (state= initialState,action)=>{
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                users:action.payload
            }
            case VIEW_PROFILE:
                return{
                    ...state,
                    loggedUser:action.payload
                }
            default:
                return state;
        }
    }

export default veiwUserReducer;

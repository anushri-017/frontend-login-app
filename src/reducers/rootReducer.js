import {combineReducers} from "redux";
import loginReducer from "./LoginReducer";
import registerReducer from "./registerReducer";
import veiwUserReducer from "./viewUsersReducers"
  

const  rootReducers  = combineReducers({
    loginReducer,
    registerReducer,
    veiwUserReducer
})

export default rootReducers;
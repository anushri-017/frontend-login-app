import {combineReducers} from "redux";
import loginReducer from "./LoginReducer";
import registerReducer from "./registerReducer";
import veiwUserReducer from "./viewUsersReducers"
  

const  rootReducers  = combineReducers({
     login:loginReducer,
    register:registerReducer,
    userProfile:veiwUserReducer
})

export default rootReducers;
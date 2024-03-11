import { LOGIN,LOGOUT } from "../actions/authActions";

const localStorageUsername = localStorage.getItem("username")

const initialState = {
    username: null,
    isLoggedIn: false, 
};

if (localStorageUsername !== undefined && localStorageUsername !== null){
   initialState.username = localStorageUsername
   initialState.isLoggedIn = true   
}
console.log(localStorageUsername)

export default function authReducer(state = initialState , action ){
    if(action.type === LOGIN ){
        return {
            ...state,
            username : action.payload.username,
            isLoggedIn : true
         }
    }
    else if(action.type === LOGOUT){
        console.log(LOGOUT)
        return{
            ...state,
            username :null,
            isLoggedIn :false
        }
    }
    else {
        return state ;    
    }
}






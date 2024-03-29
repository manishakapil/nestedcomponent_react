import authReducer from "./reducers/authReducer";
import { combineReducers ,createStore} from 'redux';

const rootReducer = combineReducers({
    authReducer ,
  });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;


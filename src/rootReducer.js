import { combineReducers } from "redux";
import lesson6 from "./containers/lesson6/reducer";
import lesson8 from "./containers/lesson8/reducer";

var rootReducer = combineReducers({
    l6: lesson6,
    l8: lesson8
});


export default rootReducer;
import {createStore} from "redux";

import reducer from "./rootReducer";

var rootStore = createStore(reducer);

export default rootStore;
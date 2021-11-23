import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/children-pages/recommend/store/index";
const cReducer=combineReducers({
    recommend:recommendReducer
})
export default cReducer;
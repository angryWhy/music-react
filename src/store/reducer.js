import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/children-pages/recommend/store/index";
import {reducer as rankingReducer} from "../pages/discover/children-pages/ranking/store/index"
const cReducer=combineReducers({
    recommend:recommendReducer,
    ranking:rankingReducer

})
export default cReducer;
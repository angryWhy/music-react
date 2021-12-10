import * as acitonTypes from "./constants"
const defaultState={
    topList:[]
}
function reducer (state=defaultState,action){
    switch (action.type) {
    case acitonTypes.GET_TOP_LIST:
        return {...state,topList:action.topList}
    default:
        return state
    }

}
export default reducer
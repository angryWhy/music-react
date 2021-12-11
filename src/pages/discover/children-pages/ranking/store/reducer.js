import * as acitonTypes from "./constants"
const defaultState={
    topList:[],
    musicList:{}
}
function reducer (state=defaultState,action){
    switch (action.type) {
    case acitonTypes.GET_TOP_LIST:
        return {...state,topList:action.topList}
    case acitonTypes.GET_MUSIC_LIST:
        return{...state,musicList:action.musicList}
    default:
        return state
    }

}
export default reducer
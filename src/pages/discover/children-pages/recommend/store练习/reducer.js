import * as actionTypes from './constants'
const defaultstate={
    topBanners:[]
}
function reducer(state=defaultstate,action){
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS :
        return {...state,topBanners:action.topBanners}
        default:
            return state
    }
}
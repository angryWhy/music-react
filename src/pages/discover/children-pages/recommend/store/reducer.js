import * as actionTypes from "./constants"
//初始化state
const defaultstate={
    topBanners:[],
    hotRecommend:[],
    newAlbum:[]
}

function reducer(state=defaultstate,action){
    switch (action.type) {
        
        case actionTypes.CHANGE_TOP_BANNERS:
            //进行数据修改
            return{...state,topBanners:action.topBanners}
        case actionTypes.GET_HOT_RECOMMENDS:
            return {...state,hotRecommend:action.hotRecommend}
            //都匹配不到，返回默认数据
        case actionTypes.CHANGE_NEW_ALBUMT:
            return{...state,newAlbum:action.newAlbum}
        default:
            return state;
    }
}
export default reducer
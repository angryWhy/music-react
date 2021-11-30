import * as actionTypes from "./constants"
//初始化state
const defaultstate={
    topBanners:[],
    hotRecommend:[],
    newAlbum:[],
    topList:[]
}

function reducer(state=defaultstate,action){
    switch (action.type) {
        //请求轮播图数据
        case actionTypes.CHANGE_TOP_BANNERS:
            //进行数据修改
            return{...state,topBanners:action.topBanners}
        //请求热门推荐数据
        case actionTypes.GET_HOT_RECOMMENDS:
            return {...state,hotRecommend:action.hotRecommend}
            //都匹配不到，返回默认数据
        //请求新碟上架数据
        case actionTypes.CHANGE_NEW_ALBUMT:
            return{...state,newAlbum:action.newAlbum}
        //请求排行榜数据
        case actionTypes.CHANGE_TOP_LIST:
            return {...state,topList:action.topList}
        default:
            return state;
    }
}
export default reducer
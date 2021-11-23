import * as actionTypes from "./constants"
//初始化state
const defaultstate={
    topBanners:[]
}

function reducer(state=defaultstate,action){
    switch (action.type) {
        
        case actionTypes.CHANGE_TOP_BANNERS:
            //进行数据修改
            return{...state,topBanners:action.topBanners}

            //都匹配不到，返回默认数据
        default:
            return state;
    }
}
export default reducer
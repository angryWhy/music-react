import * as actionTypes from "./constants"
import { Map } from "immutable";
//初始化state
const defaultstate=Map({
    topBanners:[]
})

function reducer(state=defaultstate,action){
    switch (action.type) {
        
        case actionTypes.CHANGE_TOP_BANNERS:
            //进行数据修改
            return state.set("topBanners",action.topBanners)

            //都匹配不到，返回默认数据
        default:
            return state;
    }
}
export default reducer
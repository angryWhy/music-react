import * as actionTypes from "./constants"
import getTopBanners from "../../../../../services/recommend"
export const changeTopBannerAction=(res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})

export const getTopBannerAction=()=>{
    return dispatch=>(
        //1------这里真正发送网络请求，拿到结果再次派发，存储数据
        getTopBanners().then(res=>{
            //2-----来到上面定义的的派发
            dispatch(changeTopBannerAction(res))
        })
    )
}
import * as actionTypes from './constants'
import getTopBanners from '../../../../../services/recommend'


const changeTopBannerAction=(res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,

    //问题
  
    topBanners:res.banners
})




//创建网络请求的action，内部调用services里的axios网络求情函数
export const getTopBannerAction=()=>{
    return dispatch=>(
        getTopBanners().then(res=>{
            
            //派发action，来到reducer里面
            dispatch(changeTopBannerAction(res))
        })
    )
}
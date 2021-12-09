import * as actionTypes from './constants'
import {getTopBanners} from '../../../../../services/recommend'
import {getHotRecommends} from '../../../../../services/recommend'
import {getNewAlbum} from '../../../../../services/recommend'
import {getTopList} from '../../../../../services/recommend'
import {getSinger} from '../../../../../services/recommend'
import {getHotAnchor} from '../../../../../services/recommend'





const changeTopBannerAction=(res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
const changeHotRecommendAction=(res)=>({
    type:actionTypes.GET_HOT_RECOMMENDS,
    hotRecommend:res.result
})
const changeNewAlbumAction=(res)=>(
    {
        type:actionTypes.CHANGE_NEW_ALBUMT,
        newAlbum:res.weekData
    }
)
const changtopListAction=(res)=>(
    {
        type:actionTypes.CHANGE_TOP_LIST,
        topList:res.weekData
    }
)
const changeSinger=(res)=>(
    {
        type:actionTypes.CHANGE_SINGER,
        singerList:res.data.artist
    }
)
const changeHotAnchor=(res)=>(
    {
    type:actionTypes.CHANGE_HOT_ANCHOR,
    anchorList:res.list.artists
}
)

//创建网络请求的action，内部调用services里的axios网络求情函数
export const getTopBannerAction=()=>{
    //真正的传入usedispatch中disptach的----传入的函数的返回值
    //为什么，可以传参数。
    return dispatch=>(
        getTopBanners().then(res=>{
            console.log(res)
            //派发action，来到reducer里面
            dispatch(changeTopBannerAction(res))
        })
    )
}

export const getHotRecommend=(limit)=>{
    return dispatch=>(
        getHotRecommends(limit).then(
         
            res=>{   
               
                //传入函数，执行函数，传入对象，执行reducer
                dispatch(changeHotRecommendAction(res))
            }
        )
    )
}
export const getNewAlbumAction=(limit)=>{
    return dispatch=>(
        getNewAlbum(limit).then(
            res=>{
                dispatch(changeNewAlbumAction(res))
            }
        )
    )
}

export const getTopListAction=(limit)=>{
    return dispatch=>(
        getTopList(limit).then(
            res=>{
                dispatch(changtopListAction(res))
            }
        )
    )
}
export const getSingerAction=(params)=>{
    return dispatch=>(
        getSinger(params).then(
            res=>{
                dispatch(changeSinger(res))
            }
        )
    )
}
export const getHotAnchorAction=(limit)=>{
    return dispatch=>(
        getHotAnchor(limit).then(
            res=>{
                
            dispatch(changeHotAnchor(res))
        })
    )
}

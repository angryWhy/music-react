import { getTopList,getMusicList} from "../../../../../services/ranking"
import * as actionTypes from "./constants"

//更改store数据，排行榜
const changeRankingListAction=(res)=>({
    type:actionTypes.GET_TOP_LIST,
    topList:res.list
})
const changeMusicListAciton=(res)=>({
    type:actionTypes.GET_MUSIC_LIST,
    musicList:res
})
//获取数据请求,排行榜
export const getTopMusicAction=(params)=>{
    return dispatch=>(
        getMusicList(params).then(res=>{
            dispatch(changeMusicListAciton(res))
        })
    )
}
export const getRankingAction=()=>{
    return dispatch=>(
        getTopList().then(res=>{
            dispatch(changeRankingListAction(res))
        })
    )
}

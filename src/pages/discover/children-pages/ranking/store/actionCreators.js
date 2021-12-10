import { getTopList } from "../../../../../services/ranking"
import * as actionTypes from "./constants"
//更改store数据
const changeRankingListAction=(res)=>({
    type:actionTypes.GET_TOP_LIST,
    topList:res.list
})

//获取数据请求
export const getRankingAction=()=>{
    return dispatch=>(
        getTopList().then(res=>{
            dispatch(changeRankingListAction(res))
        })
    )
}

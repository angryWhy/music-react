import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import {getTopMusicAction} from "../../../store/actionCreators"
import { HotRankingWrap } from './style'
export default memo(function HotRanking() {
    const dispatch = useDispatch()
    const { musicList } = useSelector(state => ({ musicList: state.ranking.musicList }), shallowEqual)
    const {topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    useEffect(() => {
        dispatch(getTopMusicAction(3778678))
    }, [dispatch])
    return (
        <HotRankingWrap>
            热歌榜
        </HotRankingWrap>
    )
})

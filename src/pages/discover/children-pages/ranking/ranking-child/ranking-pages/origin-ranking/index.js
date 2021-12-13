import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import {getTopMusicAction} from "../../../store/actionCreators"
import { OriginRankingWrap } from './style'
export default memo(function OriginRanking() {
    const dispatch = useDispatch()
    const { musicList } = useSelector(state => ({ musicList: state.ranking.musicList }), shallowEqual)
    const {topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    useEffect(() => {
        dispatch(getTopMusicAction(2884035))
    }, [dispatch])
    return (
        <OriginRankingWrap>
            原创榜
        </OriginRankingWrap>
    )
})

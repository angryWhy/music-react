import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import {getTopMusicAction} from "../../../store/actionCreators"
import { NewRankingWrap } from './style'
export default memo(function NewRanking() {
    const dispatch = useDispatch()
    const { musicList } = useSelector(state => ({ musicList: state.ranking.musicList }), shallowEqual)
    const {topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    useEffect(() => {
        dispatch(getTopMusicAction(3779629))
    }, [dispatch])
    return (
        <NewRankingWrap>
            新歌榜
        </NewRankingWrap>
    )
})

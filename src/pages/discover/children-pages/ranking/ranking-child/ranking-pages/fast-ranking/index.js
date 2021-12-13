import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import getTopMusicAction from "../../../store/actionCreators"
import TitleCover from "../../../../../../../components/ranking-top-cover/index"
export default memo(function FastRanking() {
    const dispatch = useDispatch()
    const { musicList } = useSelector(state => ({ musicList: state.ranking.musicList }), shallowEqual)
    const {topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    useEffect(() => {
        dispatch(getTopMusicAction(19723756))
    }, [dispatch])
    return (
        <div>
           <TitleCover musicList={musicList}/>
        </div>
    )
})

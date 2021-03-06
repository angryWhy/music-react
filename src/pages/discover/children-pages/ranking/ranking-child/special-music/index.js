import React, { memo,useEffect } from 'react'
import SingerCover from '../../../../../../components/singer-cover'
import { SpecialMusicWrap } from './style'
import { useDispatch } from 'react-redux'
import { getRankingAction } from '../../store/actionCreators'
import { useSelector,shallowEqual } from 'react-redux'
import { rankinglinklist } from '../../../../../../common/local-data'
import { NavLink } from 'react-router-dom'
export default memo(function SpecialMusic() {
    const dispatch=useDispatch();
    const {topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    useEffect(() => {
        dispatch(getRankingAction())
    }, [dispatch])
    console.log(topList);
    return (
        <SpecialMusicWrap>
            <h2>云音乐特色榜</h2>
            {
                topList.slice(0,4).map((item,index)=>{
                    return(
                        <NavLink to={rankinglinklist[index].link}>
                        <div className='two' key={index}>
                            <SingerCover cover={item.coverImgUrl} 
                                         size={40} 
                                         info={item}
                                         briefDesc={item.updateFrequency} 
                            
                            />
                        </div>
                        </NavLink>
                    )
                })
            }
        </SpecialMusicWrap>
    )
})

import React, { memo } from 'react'
import { GlobalMusicCover } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import SingerCover from '../../../../../../components/singer-cover'
export default memo(function GlobadMusic() {
    const{topList}=useSelector(state=>({
        topList:state.ranking.topList
    }),shallowEqual)
    return (
        <GlobalMusicCover>
             <h2>全球媒体榜</h2>
             {
                 topList.slice(4,36).map((item,index)=>{
                     return (
                         <div className='showList' key={index}>
                             <SingerCover cover={item.coverImgUrl} 
                                         size={40} 
                                         info={item}
                                         briefDesc={item.updateFrequency} 
                            
                            />
                         </div>
                     )
                 })
             }
        </GlobalMusicCover>
    )
})

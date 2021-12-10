import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Topwrap } from './style'
export default memo(function TitleCover() {
    const{topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    console.log(topList);
    return (
        <Topwrap>
            <div className='content'>
            <div className='mask'>
                <img className='image' src='https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg'  alt='' />   
            </div>
            <h2 className='name'>飙升榜</h2>
            </div>
        </Topwrap>
    )
})

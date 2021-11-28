import React, { memo, useEffect } from 'react'
import {HotRecommendWrapper} from './style'
import SongsCover from '../../../../../../components/songs-cover/index'
import ThemeHeaderRcm from '../../../../../../components/theme-header-rcm/index'
import { useSelector, useDispatch,shallowEqual} from 'react-redux'
import { getHotRecommend } from '../../store/actionCreators'
export default memo(function HotRecommend() {
    //hotRecommend不能渲染，是一个对象。报错原因
    //列表数据已拿到actionc里面
    const {hotRecommend}=useSelector(state=>(
        {hotRecommend:state.recommend.hotRecommend}
    ),
      shallowEqual )
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getHotRecommend(8))
    }, [dispatch])

    return (
        <HotRecommendWrapper>
             <ThemeHeaderRcm title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
            <div className="recommend-list">
                {
                    hotRecommend.map((item,index)=>(
                        <SongsCover key={index} info={item}></SongsCover>
                    ))
                }
            </div>
        </HotRecommendWrapper>
    )
})

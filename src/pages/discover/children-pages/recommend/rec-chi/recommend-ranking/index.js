import React, { memo,useEffect,useState } from 'react'

import { useSelector,useDispatch, shallowEqual } from 'react-redux'



import ThemeHeaderRcm from '../../../../../../components/theme-header-rcm/index'
import {TopRanking} from "../../../../../../components/top-ranking/index"




import {RankingWrapper} from "./style"
import { getTopListAction } from '../../store/actionCreators'
export default memo(function RecommendRanking() {
    //储存三个图片,state
    const [pic, setPic] = useState(["https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150","https://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150","https://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150"])



    //存储标题
    const [title] = useState(["飙升榜","新歌榜","原创榜"])



    //redux相关
    const {topList}=useSelector(state =>({topList:state.recommend.topList}),shallowEqual)
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getTopListAction(30))
       console.log("111")
    }, [dispatch])
    return (
        <RankingWrapper>
            <ThemeHeaderRcm title="排行榜单"/>
                <div className="tops">
                <TopRanking picUrl={pic[0]} info={topList} name={title[0]} startNum={0} 
                endNum={9}/>
                <TopRanking picUrl={pic[1]} info={topList} name={title[1]} startNum={0} 
                endNum={9}/>
                <TopRanking picUrl={pic[2]} info={topList} name={title[2]} startNum={0} 
                endNum={9}/>
                </div>
        </RankingWrapper>
    )
})

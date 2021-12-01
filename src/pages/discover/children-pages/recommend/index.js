import React, { memo } from 'react'
/*import { useDispatch,useSelector,shallowEqual } from 'react-redux';
import {getTopBannerAction}from './store/actionCreators'*/
import TopBanner from './rec-chi/top-banner/index'
import HotRecommendWrapper from './rec-chi/hot-recommend/index'
import NewAlbum from './rec-chi/new-album'
import RecommendRanking from './rec-chi/recommend-ranking'
import Login from './rec-chi/login'
import SettleSinger from './rec-chi/settle-singer'
import HotAnchor from './rec-chi/hot-anchor'
import {
    RecommendWrapper,
    RecommendRight,
    RecommendLeft,
    Content
} from './style'
function Recommend(props) {
     //传入一个回调函数，返回对象，初始化state

     //useSelector弊端，每次返回对象通过==比较
     /* const {topBanners}=useSelector((state)=>({
        topBanners:state.recommend.topBanners
    }),shallowEqual)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])*/
    return (
        <div>
       <h2> 
           <RecommendWrapper>
               <TopBanner/>
               <Content className="wrap-v2">
                   <RecommendLeft>
                   <HotRecommendWrapper/>
                   <NewAlbum/>
                   <RecommendRanking/>
                   </RecommendLeft>
                   <RecommendRight>
                      <Login/>
                      <SettleSinger/>
                      <HotAnchor/>
                   </RecommendRight>

               </Content>
            </RecommendWrapper>
       </h2>
        </div>
    )
}
export default memo(Recommend)
// //中间件参数一，包裹数据
// const mapToStateProps=state=>({
//     //取出，reducer里面，定义的state，topBanners数组
//     topBanners:state.recommend.topBanners
// })

// //中间件参数二，dispatch，派发action
// const mapToDispatchProps=dispatch=>({
//     getBanners:()=>{
//         dispatch(getTopBannerAction())
//     }
//     })

// export default connect(mapToStateProps,mapToDispatchProps)(memo(Recommend));

import React, { memo } from 'react'
/*import { useDispatch,useSelector,shallowEqual } from 'react-redux';
import {getTopBannerAction}from './store/actionCreators'*/
import { RecommendWrapper } from './style'
import TopBanner from './rec-chi/top-banner/index'
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
               <TopBanner>
                   
               </TopBanner>
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

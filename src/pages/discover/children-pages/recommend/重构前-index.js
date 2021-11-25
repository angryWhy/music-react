import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux';
import {getTopBannerAction}from './store/actionCreators'
function Recommend(props) {
    const{getBanners,topBanners}=props;
    // 发送网络请求,直接来到派发
    useEffect(() => {
        getBanners()
    }, [getBanners])
    return (
        <div>
       <h2> {topBanners.length}</h2>
        </div>
    )
}
//中间件参数一，包裹数据
const mapToStateProps=state=>({
    //取出，reducer里面，定义的state，topBanners数组
    topBanners:state.recommend.topBanners
})

//中间件参数二，dispatch，派发action
const mapToDispatchProps=dispatch=>({
    getBanners:()=>{
        dispatch(getTopBannerAction())
    }
    })

export default connect(mapToStateProps,mapToDispatchProps)(memo(Recommend));

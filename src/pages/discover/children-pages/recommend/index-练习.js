import React, { memo, useEffect } from 'react'
import {  useDispatch, useSelector,shallowEqual } from 'react-redux';
import {getTopBannerAction}from './store/actionCreators'
function Recommend(props) {
    //传入一个回调函数，返回对象，初始化state

     //useSelector弊端，每次返回对象通过==比较
     const {topBanners}=useSelector((state)=>({
        topBanners:state.recommend.topBanners
    }),shallowEqual)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])
    return (
        <div>
       <h2> {topBanners.length}</h2>
        </div>
    )
}
// const mapToStateProps=state=>{
//     //此处定义数据，传给state，必须先获取网络请求的数据，先定义第二个函数的操作
// }

// const mapToDispatchProps=dispatch=>({
//     getBanners:()=>{
//         //此处是执行发送网络请求获取banners，然后通过派发执行，网络请求派发里嵌套数据存储派发
//         dispatch(getTopBannerAction())
//     }
// })
export default memo(Recommend())
// export default connect(mapToStateProps,mapToDispatchProps)(memo(Recommend));
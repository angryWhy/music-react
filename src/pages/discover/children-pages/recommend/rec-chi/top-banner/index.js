import React, { memo,useCallback,useEffect,useRef,useState} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux';
import {getTopBannerAction} from '../../../recommend/store/actionCreators'
import {Carousel} from 'antd'
import {
    BannerWrapper,
    BannerRight,
    BannerLeft,
    BannerControl
} from './style'
function TopBanner() {
    //拿到Ref
    const bannerRef=useRef();

    //记录位置
    const [currentIndex, setCurrentIndex] = useState(0);
    
    
    //组件和redux关联
    //传入一个回调函数，返回对象，初始化state
     //useSelector弊端，每次返回对象通过===比较
     const { topBanners }=useSelector(state=>({
        topBanners:state.recommend.topBanners
    }),shallowEqual)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    const bannerChange=useCallback((from,to)=>{
        setCurrentIndex(to);
    },[])
    //设置背景图
    const bgImage=topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+'?imageView&blur=40x20')

    
    return (
        <div>
            <BannerWrapper bgImage={bgImage}>
                <div className="banner wrap-v2">
                    <BannerLeft>
                        {/*拿到ref，监听切换*/}
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item,index)=>{
                                return(
                                    <div key={item.imageUrl} className="banner-item">
                                        <img className="image" src={item.imageUrl} alt={item.imageUrl}/>
                                    </div>
                                )
                            })
                        }
                        </Carousel>
                    </BannerLeft>
                    <BannerRight></BannerRight>
                    <BannerControl>
                        <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
                        <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
                    </BannerControl>
                </div>
            </BannerWrapper>
        </div>
    )
}
export default memo(TopBanner)
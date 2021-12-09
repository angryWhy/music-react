import React, { memo, useEffect,useState } from 'react'
import { HotAnchorWrap } from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getHotAnchorAction } from '../../store/actionCreators'
import SingerCover from "../../../../../../components/singer-cover/index"
export default memo(function HotAnchor() {
    const [des] = useState("中国流行歌手、音乐人")
    const dispatch = useDispatch()
    const { anchorList } = useSelector(state => ({ anchorList: state.recommend.anchorList }), shallowEqual)
    useEffect(() => {
        dispatch(getHotAnchorAction(5))
    }, [dispatch])
 
    console.log(anchorList.slice(0,5));
    return (
        <HotAnchorWrap>
            <div className='main'>
            <div className="header">
                <span>热门主播</span>
            </div>
            <hr />
        
                <div className='main' >
                    
                    {
                      anchorList.slice(0,5).map((item,index)=>{
                          return (
                          <div className='one'>
                                <SingerCover info={item}key={index} briefDesc={des} cover={item.picUrl} size={40} />
                          </div>
                          )
                      }
                      )
                    }
                </div>
          </div>
        </HotAnchorWrap>
    )
})

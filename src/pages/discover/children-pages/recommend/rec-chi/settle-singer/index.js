import React, { memo,useEffect, useState } from 'react'
import { getSingerAction } from '../../store/actionCreators'
import { useSelector,useDispatch, shallowEqual} from 'react-redux'
import { Button } from 'antd';
import SingerCover from '../../../../../../components/singer-cover/index'
import {SettleSingerWrap} from "./style"
export default memo(function SettleSinger() {
    const [des] = useState("中国台湾流行乐男歌手、音乐人、演员、导演、编剧")
    const {singerList} = useSelector(state => ({singerList:state.recommend.singerList}),shallowEqual)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getSingerAction(6452))
    }, [dispatch])
    
    function showSinger(singerList){
        let singer=[]
        for(let i=0;i<5;i++){
            singer.push(singerList)
        }
        return singer;
    }
    console.log(singerList);
    return (
        <SettleSingerWrap>
            <div className="header">
            <span>入驻歌手</span>
            <span><a href="/todo">查看全部&gt;</a></span>
            </div>
            <hr/>
            <div className="content">
              {
                showSinger(singerList).map((item,index)=>{
                    return <div key={index}><SingerCover info={item} cover={item.cover} briefDesc={des} size={62}/></div>
                })
              }
            </div>
            <div className='apply'><Button style={{ background: "pink"}} >申请成为网易云音乐人</Button></div>
        </SettleSingerWrap>
    )
})

import React, { memo, useEffect} from 'react'
import { getTopMusicAction } from "../../pages/discover/children-pages/ranking/store/actionCreators";
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Topwrap } from './style'
import { Button } from 'antd';
import {ClockCircleOutlined,PlayCircleFilled,PlusOutlined} from "@ant-design/icons"
export default memo(function TitleCover(props) {
    const {getAction,listType,stateType,info}=props
    const dispatch = useDispatch()
    const { musicList } = useSelector(state => ({ musicList: state.ranking.musicList }), shallowEqual)
    const {topList}=useSelector(state=>({topList:state.ranking.topList}),shallowEqual)
    useEffect(() => {
        dispatch(getTopMusicAction(19723756))
    }, [dispatch])
    function getDate(){
        let month=new Date().getMonth()
        let day=new Date().getDate()
        return `${month+1}月${day}日 ：`
    }
    return (
        <Topwrap>
            <div className='content'>
                <div className='mask'>
                    <img className='image' 
                    src={musicList.playlist===undefined? "":musicList.playlist.coverImgUrl}
                    alt="" />
                </div>
                <div className='right'>
                <h2 className='name'>{musicList.playlist===undefined? "":musicList.playlist.name}
                </h2>
                <div className='des'>
                <i><ClockCircleOutlined/></i>
                <span>{getDate()}</span>
                <span 
                className='update'>
                    {`(${topList[0]===undefined? "":topList[0].updateFrequency})`}
                </span> 
                </div>
                <div className='operate'>
                <Button 
                className='playList'
                icon={<PlayCircleFilled style={{color:"white",width:"6px"}}
               
                />} type="primary" size="middle" style={{color:"blue"}}>播放
                </Button>
                <Button  width="10px" style={{padding:"0px 5px"}}><PlusOutlined style={{color:"blue",padding:"0px"}} /></Button>

                </div>
                </div>
            </div>
        </Topwrap>
    )
})

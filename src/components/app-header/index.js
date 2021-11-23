/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '../../common/local-data'
import { HeadWrapper, HeadLeft,HeadRight } from './style'
import {SearchOutlined} from '@ant-design/icons'
import { Input } from 'antd'
export default memo(function AppHeader() {
    const showItem=(item,index)=>{
        if(index<3){
            {/*NavLink加了exact，导致一级路由无法渲染CSS样式*/}
            return<NavLink to={item.link} >{item.title}<i className="icon sprite_01"></i></NavLink>
        }
        else{
            return<a href={item.link}>{item.title}</a>
        }
    }
    return (
        <HeadWrapper>
            <div className="content wrap-v1">
            <HeadLeft>
                <a href="#/" className="logo sprite_01">网易云音乐</a>
                <div className="select-list">
                    {
                        headerLinks.map((item,index)=><div 
                        key={index}
                        className="select-item "
                        >
                            {showItem(item,index)}
                        </div>)
                    }
                </div>
            </HeadLeft>
            <HeadRight>
           <Input placeholder="音乐/视频/用户/电台" prefix={<SearchOutlined />} className="search"/>
           <div className="center"> 创作者中心</div>
           <div>登录</div>
            </HeadRight>
            </div>
            <div className="driver"></div>
            
        </HeadWrapper>
    )
})

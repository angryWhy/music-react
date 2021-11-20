import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '../../common/local-data'
import { HeadWrapper, HeadLeft,HeadRight } from './style'
export default memo(function AppHeader() {
    const showItem=(item,index)=>{
        if(index<3){
            return<NavLink to={item.link}>{item.title}</NavLink>
        }
        else{
            return<a href={item.link}>{item.title}</a>
        }
    }
    return (
        <HeadWrapper>
            <div className="content wrap-v1">
            <HeadLeft>
                <a href="#/" className="logo sprite_01"></a>
                
            </HeadLeft>
            <HeadRight>
            <div className="select-list">
                    {
                        headerLinks.map((item,index)=><div key={index}>
                            {showItem(item,index)}
                        </div>)
                    }
                </div>
            </HeadRight>
            </div>
            <div className="driver"></div>
            <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/friend">我的音乐</NavLink>
            <NavLink to="/mine">朋友</NavLink>
        </HeadWrapper>
    )
})

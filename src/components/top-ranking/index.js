import React, { memo } from 'react'
import {TopRankingWrapper} from "./style"
export const TopRanking =memo(function TopRanking(props) {
    const {info,picUrl,name,startNum,endNum}=props;
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                     <img src={picUrl} alt=""/>
                     <a href="/todo" className="image_cover">""</a>
                </div>
                <div className="info">
                    
                    <a href="/todo" >{name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    info.slice(startNum,endNum).map((item,index)=>{
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index+1}</div>
                                <div className="info"><span className="name text-nowrap">{item.name}</span>
                                <div className="operate">
                                    <button className="btn sprite_02 play"></button>
                                    <button className="btn sprite_icon2 addto"></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer"></div>
        </TopRankingWrapper>
    )
})

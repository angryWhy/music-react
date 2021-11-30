import React, { memo } from 'react'
import {TopRankingWrapper} from "./style"
export const TopRanking =memo(function TopRanking(props) {
    const {info,picUrl}=props;
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                     <img src={picUrl} alt=""/>
                     <a href="/todo" className="image_cover">""</a>
                </div>
            </div>
            <div className="list"></div>
            <div className="footer"></div>
        </TopRankingWrapper>
    )
})

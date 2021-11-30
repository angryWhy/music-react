import React, { memo } from 'react'
import TopRankingWrapper from "./style"
export default memo(function TopRanking() {
    return (
        <TopRankingWrapper>
            <div className="header"></div>
            <div className="list"></div>
            <div className="footer"></div>
        </TopRankingWrapper>
    )
})

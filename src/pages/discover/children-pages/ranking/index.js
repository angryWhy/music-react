import React, { memo } from 'react'
import RankingList from './ranking-child/ranking-list'
// import FastRanking from './ranking-child/fast-ranking'
import SpecialMusic from './ranking-child/special-music'
import GlobalMusic from './ranking-child/global-music'
import TitleCover from '../../../../components/ranking-top-cover/index'
import { RankingMain,RankingLeft,RankingRight } from './style'
export default memo(function Ranking() {
    return (
        <RankingMain className="wrap-v2">
            <RankingLeft >
                <SpecialMusic/>
                <GlobalMusic/>
            </RankingLeft>
            <RankingRight>
                <TitleCover/>
                <RankingList/>
            </RankingRight>
        </RankingMain>
    )
})

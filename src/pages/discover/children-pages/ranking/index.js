import React, { memo } from 'react'

// import FastRanking from './ranking-child/fast-ranking'
import SpecialMusic from './ranking-child/special-music'
import GlobalMusic from './ranking-child/global-music'
// import RankingList from './ranking-child/ranking-list'
// import TitleCover from '../../../../components/ranking-top-cover/index'
import { RankingMain,RankingLeft,RankingRight } from './style'
import { renderRoutes } from 'react-router-config'
export default memo(function Ranking(props) {
    const{route}=props;
    return (
        <RankingMain className="wrap-v2">
            <RankingLeft >
                <SpecialMusic/>
                <GlobalMusic/>
            </RankingLeft>
            <RankingRight>
                {renderRoutes(route.routes)}
            </RankingRight>
        </RankingMain>
    )
})

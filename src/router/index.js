import { Redirect } from "react-router";
import Friend from "../pages/friend";
import Mine from "../pages/mine";
import Discover from '../pages/discover'
import React from "react";
import Album from "../pages/discover/children-pages/album/index"
import Artist from "../pages/discover/children-pages/artist/index"
import Djradio from "../pages/discover/children-pages/djradio/index"
import Ranking from "../pages/discover/children-pages/ranking/index"
import Recommend from "../pages/discover/children-pages/recommend/index"
import Song from "../pages/discover/children-pages/song/index"
import TitleCover from "../components/ranking-top-cover/index"
// import FastRanking from "../pages/discover/children-pages/ranking/ranking-child/ranking-pages/fast-ranking";
import NewRanking from "../pages/discover/children-pages/ranking/ranking-child/ranking-pages/new-ranking";
import HotRanking from "../pages/discover/children-pages/ranking/ranking-child/ranking-pages/hot-ranking";
import OriginRanking from "../pages/discover/children-pages/ranking/ranking-child/ranking-pages/origin-ranking";

const routes=[
    {
        path:"/",
        exact:true,
        render:()=>{
            return<Redirect to="/discover"/>
        }
    },
    {
        path:"/discover",
        component:Discover,
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
                path:"/discover/recommend",
                component:Recommend
            },
            {
                path:"/discover/ranking",
                component:Ranking,
                routes:[
                    {
                        path: "/discover/ranking",
                        exact: true,
                        render: () => (
                          <Redirect to="/discover/ranking/fastranking"/>
                        )
                      },
                    {
                        path:"/discover/ranking/fastranking",
                        component:TitleCover
                    },
                    {
                        path:"/discover/ranking/newranking",
                        component:NewRanking
                    },
                    {
                        path:"/discover/ranking/originranking",
                        component:OriginRanking
                    },
                    {
                        path:"/discover/ranking/hotranking",
                        component:HotRanking
                    }
                ]
            },
            {
                path:"/discover/songs",
                component:Song
            },
            {
                path:"/discover/djradio",
                component:Djradio
            },
            {
                path:"/discover/artist",
                component:Artist
            },
            {
                path:"/discover/album",
                component:Album
            }
        ]
    },
    {
        path:"/friend",
        component:Friend
    },
    {
        path:"/mine",
        component:Mine
    }

]
export default routes;
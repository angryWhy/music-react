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
                component:Ranking
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
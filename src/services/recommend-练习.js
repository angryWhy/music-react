import request from './request'


export const getTopBanners=()=>{
    return request({
        url:"/banner"
    })
}
export const getHotRecommends=()=>{
    return request({
        url:"personalized"
    })
}
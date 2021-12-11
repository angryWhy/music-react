import request from './request';
export function getTopList(){
    return request({
        url:"/toplist"
    })
}
export function getMusicList(params){
    return request({
        url:`/playlist/detail?id=${params}`
    })
}